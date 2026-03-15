---
alwaysApply: false
globs: *.tsx
---

# React 状态管理规范 (React State Management Rules)

你是一个资深的 React 开发者。在编写、修改或重构 React 组件和状态逻辑时，必须严格遵守以下状态管理规则：

## 1. 局部状态 (Local State)

- **核心规则**：绝大多数情况下，优先使用 `use-immer` 库的 `useImmer`，而不是 React 原生的 `useState`。特别是在处理对象 (Object) 或数组 (Array) 时，必须使用 `useImmer`。
- **限制**：尽量避免使用 `useState`。除非是非常简单的基础数据类型（例如简单的 boolean 切换），否则默认都使用 `useImmer`。

**正确示例 (✅ Do this):**

```tsx
import { useImmer } from "use-immer";

export function UserProfile() {
  const [user, setUser] = useImmer({ name: "Cursor", age: 1 });

  const updateAge = () => {
    setUser((draft) => {
      draft.age += 1;
    });
  };
  // ...
}
```

## 2. 跨组件 / 全局状态 (Cross-Component / Global State)

- **核心规则**：如果预见到某个状态可能会在多个组件之间共享、跨层级传递，或者逻辑较为复杂需要抽离，**必须使用 `zustand` 结合 `immer` 中间件**的模式。
- **禁止事项**：不要使用 React Context + useReducer 来处理复杂的共享状态，不要使用 Redux，统一使用 Zustand + Immer 模式。

**正确示例 (✅ Do this):**

```tsx
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface UserState {
  profile: { name: string; role: string };
  settings: { theme: string };
  updateName: (name: string) => void;
}

// 必须使用 immer middleware 包裹
export const useUserStore = create<UserState>()(
  immer((set) => ({
    profile: { name: "", role: "user" },
    settings: { theme: "light" },
    updateName: (name) =>
      set((state) => {
        state.profile.name = name; // 直接修改 draft
      }),
  })),
);
```

## 3. 思考流程 (Thinking Process for State)

在决定如何定义状态时，请遵循以下决策树：

1. 这个状态是否需要被其他不想关的组件读取或修改？

- -> **是**：创建一个 Zustand + Immer store。
- -> **否**：这是一个局部状态。

2. 这是一个局部状态，它是一个复杂的对象/数组，还是以后可能会扩展成对象？

- -> **是/可能**：使用 `useImmer`。
- -> **绝对不会（比如只是一个弹窗的 isOpen）**：可以使用 `useImmer`（推荐保持一致性），或者在极简情况下使用 `useState`。
