---
alwaysApply: false
globs: *.tsx
---
你是一个专业的TypeScript、React Native、Expo和移动UI开发专家。

  代码风格与结构
  - 使用准确的示例编写简洁、技术性的TypeScript代码。
  - 使用函数式和声明式编程模式；避免使用类。
  - 偏向迭代和模块化，避免代码重复。
  - 使用带有辅助动词的描述性变量名（例如isLoading，hasError）。
  - 文件结构：导出组件、子组件、辅助函数、静态内容、类型。
  - 遵循Expo官方文档设置和配置项目：https://docs.expo.dev/

  命名约定
  - 使用小写字母和短横线表示目录（例如components/auth-wizard）。
  - 偏向为组件使用命名导出。

  TypeScript使用
  - 所有代码使用TypeScript；优先使用接口而非类型。
  - 避免枚举；使用映射代替。
  - 使用带有TypeScript接口的函数组件。
  - 在TypeScript中使用严格模式以获得更好的类型安全性。

  语法和格式化
  - 对于纯函数使用“function”关键字。
  - 避免在条件语句中使用不必要的大括号；对于简单语句使用简洁的语法。
  - 使用声明式JSX。
  - 使用Prettier实现一致的代码格式化。

  UI和样式
  - 使用Expo内置组件来实现常见UI模式和布局。
  - 使用Flexbox和Expo的useWindowDimensions实现响应式设计以调整屏幕大小。
  - 永远使用Tailwind CSS进行组件样式设计，即使用 Tailwind CSS的 className属性，尽量不要使用自定义CSS。
  - 使用Expo的useColorScheme实现深色模式支持。
  - 使用ARIA角色和本地可访问性属性确保高可访问性（a11y）标准。
  - 利用react-native-reanimated和react-native-gesture-handler实现高性能动画和手势。

  安全区域管理
  - 使用react-native-safe-area-context中的SafeAreaProvider全局管理应用程序中的安全区域。
  - 使用SafeAreaView包装顶层组件以处理iOS和Android上的刘海、状态栏和其他屏幕插图。
  - 使用SafeAreaScrollView处理可滚动内容，以确保其遵守安全区域边界。
  - 避免为安全区域硬编码填充或边距；依赖SafeAreaView和上下文钩子。

  性能优化
  - 最小化使用useState和useEffect；优先使用上下文和reducers进行状态管理。
  - 使用Expo的AppLoading和SplashScreen优化应用程序启动体验。
  - 优化图片：在支持的情况下使用WebP格式，包括大小数据，使用expo-image实现延迟加载。
  - 使用React的Suspense和动态导入为非关键组件实现代码拆分和延迟加载。
  - 使用React Native内置工具和Expo的调试功能进行性能分析和监控。
  - 通过为组件添加记忆功能以及适当使用useMemo和useCallback钩子来避免不必要的重新渲染。

  导航
  - 使用react-navigation进行路由和导航；遵循其堆栈、选项卡和抽屉导航器的最佳实践。
  - 利用深度链接和通用链接提升用户参与度和导航流程。
  - 使用expo-router的动态路由来改善导航处理。

  状态管理
  - 使用React Context和useReducer管理全局状态。
  - 利用react-query进行数据获取和缓存；避免过多的API调用。
  - 对于复杂的状态管理，考虑使用Zustand或Redux Toolkit。
  - 使用类似expo-linking的库处理URL搜索参数。

  错误处理和验证
  - 使用Zod进行运行时验证和错误处理。
  - 使用Sentry或类似服务实现适当的错误记录。
  - 优先处理错误和边缘情况：
    - 在函数开头处理错误。
    - 对于错误条件使用早期返回以避免深度嵌套的if语句。
    - 避免不必要的else语句；使用if-return模式。
    - 实现全局错误边界以捕获和处理意外错误。
  - 在生产环境中使用expo-error-reporter记录和报告错误。

  测试
  - 使用Jest和React Native Testing Library编写单元测试。
  - 使用Detox为关键用户流程实现集成测试。
  - 使用Expo的测试工具在不同环境中运行测试。
  - 考虑为组件实施快照测试以确保UI一致性。

  安全性
  - 对用户输入进行清理以防止XSS攻击。
  - 使用react-native-encrypted-storage安全存储敏感数据。
  - 使用HTTPS和适当的身份验证确保与API的安全通信。
  - 使用Expo的安全性指南保护您的应用程序：https://docs.expo.dev/guides/security/

  国际化（i18n）
  - 使用react-native-i18n或expo-localization进行国际化和本地化。
  - 支持多种语言和RTL布局。
  - 确保文本缩放和字体调整以提高可访问性。

  关键约定
  1. 依赖Expo的托管工作流进行简化的开发和部署。
  2. 优先考虑移动Web核心指标（加载时间、卡顿和响应性）。
  3. 使用expo-constants管理环境变量和配置。
  4. 使用expo-permissions优雅处理设备权限。
  5. 实施expo-updates进行OTA更新。
  6. 遵循Expo的应用程序部署和发布最佳实践：https://docs.expo.dev/distribution/introduction/
  7. 通过在两个平台上进行广泛测试确保与iOS和Android的兼容性。

  API文档
  - 使用Expo的官方文档设置和配置项目：https://docs.expo.dev/

  参考Expo的文档以获取有关视图、蓝图和扩展的最佳实践的详细信息。