---
alwaysApply: false
globs: *.vue
---
# Vue 3 & TypeScript 编码规范

## 基本原则

- 全面拥抱 **Composition API** 和 **`<script setup>`** 语法
- 严格的 **TypeScript** 类型检查
- 逻辑复用优先使用 **Composables**
- 规范等级：【必须】= MUST/REQUIRED，【推荐】= SHOULD，【可选】= MAY

## 1. 组件文件结构【必须】

- 单文件组件 (SFC) 必须使用 `<script setup lang="ts">`
- 顶级标签顺序统一为：`<script>` -> `<template>` -> `<style>`
- 文件名必须使用 PascalCase (大驼峰)

```vue
<!-- 好的示例: UserProfile.vue -->
<script setup lang="ts">
// 逻辑代码
</script>

<template>
  <!-- 模板代码 -->
</template>

<style scoped>
/* 样式代码，尽量不要用自定义 css，改用模版中的 Tailwind 行内 class*/
</style>

<!-- 错误示例: user-profile.vue -->
<template>
  <!-- 模板在前 -->
</template>
<script>
// 使用了 Options API 或未标记 setup
export default {}
</script>
```

## 2. 响应式数据【推荐】

- 优先使用 `ref` 而不是 `reactive`，以保持解构时的响应性一致性
- 变量名不需要加 `Ref` 后缀
- 访问 `ref` 值时必须使用 `.value` (在 script 中)

```typescript
// 好的示例
const count = ref(0);
const user = ref<User>({ name: 'John' });

function increment() {
  count.value++;
}

// 错误示例
const state = reactive({ count: 0 }); // 解构会丢失响应性
const countRef = ref(0); // 匈牙利命名法是不必要的
```

## 3. Props 和 Emits 定义【必须】

- 必须使用基于类型的声明 (Type-based Declaration)
- 使用 `withDefaults` 或响应式 Props 解构 (Vue 3.3+) 设置默认值
- 禁止使用运行时声明 (Runtime Declaration)

```typescript
// 好的示例
interface Props {
  msg: string;
  count?: number;
}

// 使用泛型定义
const props = withDefaults(defineProps<Props>(), {
  count: 0
});

const emit = defineEmits<{
  change: [id: number];
  update: [value: string];
}>();

// 错误示例
const props = defineProps({
  msg: String,
  count: { type: Number, default: 0 }
});
```

## 4. 组件命名与引用【必须】

- 组件文件名使用 PascalCase (如 `MyComponent.vue`)
- 在模板中使用组件时，必须使用 PascalCase 自闭合标签 (如果无内容)
- 保持组件名由多个单词组成，避免与 HTML 元素冲突

```vue
<!-- 好的示例 -->
<template>
  <MyComponent />
  <UserProfile :user="user" />
</template>

<!-- 错误示例 -->
<template>
  <my-component></my-component> <!-- 这种写法仅用于 DOM 模板 -->
  <user /> <!-- 单个单词，容易冲突 -->
</template>
```

## 5. 模板语法【推荐】

- 指令简写：必须使用 `:` 代替 `v-bind:`，`@` 代替 `v-on:`，`#` 代替 `v-slot:`
- 模板中避免复杂的 JavaScript 表达式，应提取为 `computed`
- 超过 3 个属性时，每个属性一行

```vue
<!-- 好的示例 -->
<template>
  <BaseButton
    @click="handleSubmit"
    :disabled="isSubmitting"
    :label="buttonLabel"
  />
  <div>{{ formattedDate }}</div>
</template>

<!-- 错误示例 -->
<template>
  <BaseButton v-on:click="handleSubmit" v-bind:disabled="isSubmitting" label="Submit" />
  <div>{{ new Date(date).toLocaleDateString() }}</div>
</template>
```

## 6. 计算属性与监听器【必须】

- 必须使用 `computed` 处理派生状态
- 禁止在 `computed` 中执行副作用 (如 API 请求、DOM 修改)
- 副作用必须放在 `watch` 或 `watchEffect` 中

```typescript
// 好的示例
const fullName = computed(() => `${firstName.value} ${lastName.value}`);

watch(id, async (newId) => {
  await fetchUserData(newId);
});

// 错误示例
const fullName = computed(() => {
  saveLog(); // 副作用！
  return firstName.value + lastName.value;
});
```

## 7. 指令使用规范【必须】

- `v-for` 必须配合 `:key` 使用
- 禁止在同一元素上同时使用 `v-if` 和 `v-for` (性能问题)
- 如果需要过滤列表，请使用 `computed` 预先过滤

```vue
<!-- 好的示例 -->
<template>
  <ul v-if="list.length">
    <li v-for="item in activeList" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<!-- 错误示例 -->
<template>
  <ul>
    <!-- v-if 优先级高于 v-for (Vue2) 或低于 (Vue3)，容易混淆且性能差 -->
    <li v-for="item in list" :key="item.id" v-if="item.isActive">
      {{ item.name }}
    </li>
  </ul>
</template>
```

## 8. Composables (组合式函数)【推荐】

- 命名必须以 `use` 开头 (如 `useMouse`)
- 必须将状态封装在函数内部，避免全局状态污染 (除非是单例)
- 返回值建议使用对象解构，以便扩展

```typescript
// 好的示例
export function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  const double = computed(() => count.value * 2);
  
  function increment() {
    count.value++;
  }

  return { count, double, increment };
}

// 组件中使用
const { count, increment } = useCounter();
```

## 9. 样式 (永远使用Tailwind CSS)

永远使用Tailwind CSS进行组件样式设计，即使用 Tailwind CSS的 className属性，尽量不要使用自定义CSS。
  
```

## 10. 状态管理 (Pinia)【必须】

- 必须使用 Pinia 代替 Vuex
- 必须使用 Setup Store (函数式写法) 而非 Option Store
- Store 文件名建议使用 `useXxxStore`

```typescript
// 好的示例: stores/useUserStore.ts
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => !!user.value);
  
  async function login(form: LoginForm) {
    // ...
  }

  return { user, isLoggedIn, login };
});

// 错误示例
export const useUserStore = defineStore('user', {
  state: () => ({ user: null }),
  getters: { ... },
  actions: { ... }
});
```

## 11. 顶级 await【可选】

- 在 `<script setup>` 中可以直接使用顶级 `await`
- 必须确保父组件使用了 `<Suspense>` 包裹，或者能够处理异步组件加载状态

```typescript
// 好的示例
<script setup lang="ts">
const data = await fetchApi();
</script>
```

## 12. 依赖注入【推荐】

- 使用 `provide` 和 `inject` 进行跨层级组件通信
- 必须使用 `InjectionKey` 对注入的 key 进行类型定义

```typescript
// 好的示例: keys.ts
import type { InjectionKey, Ref } from 'vue';
export const themeKey: InjectionKey<Ref<string>> = Symbol('theme');

// Parent.vue
provide(themeKey, themeRef);

// Child.vue
const theme = inject(themeKey);
if (theme) {
  // theme 被正确推断为 Ref<string>
}
```