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
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.logo {
		border-radius: 16px;
		width: 64px;
		height: 64px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}
	.title {
		margin-top: 16px;
		color: #475569;
		font-size: 15px;
		font-weight: 500;
		letter-spacing: 0.5px;
	}
</style>
