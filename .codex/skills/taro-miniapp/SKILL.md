---
name: "taro-miniapp"
description: "Provides Taro mini-program API reference and usage guidance. Invoke when user asks about Taro APIs, mini-program development, or needs help with specific Taro functionality."
---

# Taro 小程序 API 技能

本技能提供 Taro 框架小程序 API 的完整参考和使用指南。

## 基础 API

### 环境变量

- `Taro.env` - 环境变量
- `Taro.canIUse` - 判断小程序的API、回调、参数、组件等是否在当前版本可用
- `Taro.base64ToArrayBuffer` - 将 Base64 字符串转成 ArrayBuffer 对象
- `Taro.arrayBufferToBase64` - 将 ArrayBuffer 对象转成 Base64 字符串

### 系统信息

- `Taro.getSystemInfo` - 获取系统信息
- `Taro.getSystemInfoSync` - 同步获取系统信息
- `Taro.getSystemInfoAsync` - 异步获取系统信息
- `Taro.getDeviceInfo` - 获取设备基础信息
- `Taro.getAppBaseInfo` - 获取微信APP基础信息
- `Taro.getWindowInfo` - 获取窗口信息
- `Taro.getSystemSetting` - 获取设备设置
- `Taro.getAppAuthorizeSetting` - 获取微信APP授权设置
- `Taro.openSystemBluetoothSetting` - 跳转系统蓝牙设置页
- `Taro.openAppAuthorizeSetting` - 跳转系统微信授权管理页

## 路由 API

- `Taro.navigateTo` - 保留当前页面，跳转到应用内的某个页面
- `Taro.redirectTo` - 关闭当前页面，跳转到应用内的某个页面
- `Taro.switchTab` - 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
- `Taro.reLaunch` - 关闭所有页面，打开到应用内的某个页面
- `Taro.navigateBack` - 关闭当前页面，返回上一页面或多级页面

### EventChannel

- `EventChannel.emit` - 触发一个事件
- `EventChannel.on` - 持续监听一个事件
- `EventChannel.once` - 监听一个事件一次，触发后失效
- `EventChannel.off` - 取消监听一个事件

## 界面 API

### 交互反馈

- `Taro.showToast` - 显示消息提示框
- `Taro.showModal` - 显示模态对话框
- `Taro.showLoading` - 显示 loading 提示框
- `Taro.showActionSheet` - 显示操作菜单
- `Taro.hideToast` - 隐藏消息提示框
- `Taro.hideLoading` - 隐藏 loading 提示框

### 导航栏

- `Taro.setNavigationBarTitle` - 动态设置当前页面的标题
- `Taro.setNavigationBarColor` - 设置页面导航条颜色
- `Taro.showNavigationBarLoading` - 在当前页面显示导航条加载动画
- `Taro.hideNavigationBarLoading` - 在当前页面隐藏导航条加载动画
- `Taro.hideHomeButton` - 隐藏返回首页按钮

### Tab Bar

- `Taro.setTabBarItem` - 动态设置 tabBar 某一项的内容
- `Taro.setTabBarStyle` - 动态设置 tabBar 的整体样式
- `Taro.showTabBar` - 显示 tabBar
- `Taro.hideTabBar` - 隐藏 tabBar
- `Taro.setTabBarBadge` - 为 tabBar 某一项的右上角添加文本
- `Taro.removeTabBarBadge` - 移除 tabBar 某一项右上角的文本
- `Taro.showTabBarRedDot` - 显示 tabBar 某一项的右上角的红点
- `Taro.hideTabBarRedDot` - 隐藏 tabBar 某一项的右上角的红点

### 滚动与刷新

- `Taro.pageScrollTo` - 将页面滚动到目标位置
- `Taro.startPullDownRefresh` - 开始下拉刷新
- `Taro.stopPullDownRefresh` - 停止当前页面下拉刷新

### 动画

- `Taro.createAnimation` - 创建一个动画实例

## 网络 API

### 请求

- `Taro.request` - 发起 HTTPS 网络请求

### 下载

- `Taro.downloadFile` - 下载文件资源到本地

### 上传

- `Taro.uploadFile` - 将本地资源上传到服务器

### WebSocket

- `Taro.connectSocket` - 创建一个 WebSocket 连接
- `Taro.sendSocketMessage` - 通过 WebSocket 连接发送数据
- `Taro.closeSocket` - 关闭 WebSocket 连接

## 数据缓存

- `Taro.setStorage` - 将数据存储在本地缓存中
- `Taro.setStorageSync` - 同步将数据存储在本地缓存中
- `Taro.getStorage` - 从本地缓存中异步获取指定 key 的内容
- `Taro.getStorageSync` - 从本地缓存中同步获取指定 key 的内容
- `Taro.removeStorage` - 从本地缓存中移除指定 key
- `Taro.removeStorageSync` - 从本地缓存中同步移除指定 key
- `Taro.clearStorage` - 清理本地数据缓存
- `Taro.clearStorageSync` - 同步清理本地数据缓存

## 媒体 API

### 图片

- `Taro.chooseImage` - 从本地相册选择图片或使用相机拍照
- `Taro.previewImage` - 在新页面中全屏预览图片
- `Taro.getImageInfo` - 获取图片信息
- `Taro.saveImageToPhotosAlbum` - 保存图片到系统相册

### 文件

- `Taro.openDocument` - 新开页面打开文档
- `Taro.getFileSystemManager` - 获取全局唯一的文件管理器

## 位置 API

- `Taro.getLocation` - 获取当前的地理位置
- `Taro.chooseLocation` - 打开地图选择位置
- `Taro.openLocation` - 使用微信内置地图查看位置

## 设备 API

### 网络状态

- `Taro.getNetworkType` - 获取网络类型
- `Taro.onNetworkStatusChange` - 监听网络状态变化事件

### 加速度计

- `Taro.startAccelerometer` - 开始监听加速度数据
- `Taro.stopAccelerometer` - 停止监听加速度数据
- `Taro.onAccelerometerChange` - 监听加速度数据事件

### 剪贴板

- `Taro.setClipboardData` - 设置系统剪贴板的内容
- `Taro.getClipboardData` - 获取系统剪贴板的内容

### 扫码

- `Taro.scanCode` - 调起客户端扫码界面进行扫码

## 开放接口

### 登录

- `Taro.login` - 调用接口获取登录凭证（code）
- `Taro.checkSession` - 检查登录态是否过期

### 用户信息

- `Taro.getUserProfile` - 获取用户信息
- `Taro.getUserInfo` - 获取用户信息（已废弃，请使用 getUserProfile）

### 授权

- `Taro.authorize` - 提前向用户发起授权请求

### 设置

- `Taro.openSetting` - 调起客户端小程序设置界面
- `Taro.getSetting` - 获取用户的当前设置

## 转发与分享

- `Taro.showShareMenu` - 显示当前页面的转发按钮
- `Taro.hideShareMenu` - 隐藏当前页面的转发按钮
- `Taro.updateShareMenu` - 更新转发属性
- `Taro.getShareInfo` - 获取转发详细信息
- `Taro.shareFileMessage` - 转发文件到聊天
- `Taro.shareVideoMessage` - 转发视频到聊天

## 使用示例

### 页面跳转

```typescript
import Taro from "@tarojs/taro";

// 保留当前页面跳转
Taro.navigateTo({
  url: "/pages/detail/index?id=123",
});

// 关闭当前页面跳转
Taro.redirectTo({
  url: "/pages/detail/index",
});

// 跳转到 Tab 页
Taro.switchTab({
  url: "/pages/home/index",
});
```

### 显示提示

```typescript
// 显示成功提示
Taro.showToast({
  title: "操作成功",
  icon: "success",
  duration: 2000,
});

// 显示 loading
Taro.showLoading({
  title: "加载中...",
});

// 隐藏 loading
Taro.hideLoading();
```

### 网络请求

```typescript
Taro.request({
  url: "https://api.example.com/data",
  method: "GET",
  success: (res) => {
    console.log(res.data);
  },
  fail: (err) => {
    console.error(err);
  },
});
```

### 数据缓存

```typescript
// 存储数据
Taro.setStorageSync("userInfo", { name: "张三", age: 25 });

// 读取数据
const userInfo = Taro.getStorageSync("userInfo");
```
