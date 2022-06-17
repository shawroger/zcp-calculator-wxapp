<template>
	<div class="app">
		<div class="control">
				<menuItem
					v-for="item in item" 
					:key="item.name" 
					:name="item.name" 
					:page="item.page" 
					:img="item.img" 
				/>
		
			</div>

		<div class="ad">
			<ad unit-id="adunit-748f45b796e81ea3"></ad>
		</div>
	</div>
</template>

<script>
import menuItem from '@/pages/index/components/menu-item.vue';

const item = [
	{
		name: '张昌蒲计算器',
		img: '/static/images/zcp.png',
		page: '/pages/index/zcp',
		component: "zcp"
	},
	
	{
		name: '王荣吉境计算器',
		img: '/static/images/wr.png',
		page: '/pages/index/wangrong',
		component: "wangrong"
	},
	
	{
		name: '张梁计算器（凑36）',
		img: '/static/images/zl.png',
		page: '/pages/index/zhangliang',
		component: "zhangliang"
	},
	
	{
		name: '王荣 & 糜竺计算器 （凑称象）',
		img: '/static/images/mizhu.png',
		page: '/pages/index/mizhu',
		component: "wrmz"
	},
];

export default {
	data() {
		return {
			item,
		};
	},
	components: {
		menuItem
	}
};
</script>

<style scoped>
	
.app {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
}
.control {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.ad {  
	width: 100%;
}
</style>
