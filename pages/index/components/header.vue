<template>
	<view class="app-header">
		<image class="logo" src="/static/images/logo.png"></image>
		<text class="title">{{title}}</text>
	</view>
</template>

<script>
	export default {
		name: 'app-header',
		data() {
			return {
				title: '张昌蒲计算器'
			}
		}
	}
</script>

<style scoped>
	.app-header {
		margin-top: 15px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.logo {
		border-radius: 50%;
		width: 60px;
		height: 60px;
	}
	.title {
		margin-top: 10px;
		color: #8f8f94;
		font-size: 14px;
	}
</style>
