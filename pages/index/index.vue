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
			<ad unit-id="adunit-31d851ef571fc2e2" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad>
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
		name: '糜竺计算器',
		img: '/static/images/mizhu.png',
		page: '/pages/index/mizhu',
		component: "mizhu"
	},{
		name: '张梁计算器',
		img: '/static/images/zhangliang.png',
		page: '/pages/index/zhangliang',
		component: "zhangliang"
	}
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
