<template>
	<div class="app-about">
		<div class="about-header">
			<uni-notice-bar text="新增“王荣吉境计算器”" showClose="true" showIcon="true" />
			<uni-notice-bar text="修复“张梁计算器”计算问题" showClose="true" showIcon="true" />
			<div class="img-control"><img src="/static/images/logo.png" /></div>

			<uni-list>
				<uni-list-item title="应用版本" rightText="4.2.0" />
				<uni-list-item title="程序开发" rightText="Roger" />
				<uni-list-item title="更新日期" rightText="2022.06.18" />
				<uni-list-item title="展示至多前三项筛选结果" :showSwitch="true" :switchChecked="allSelect" @switchChange="setAllSelect" />
			</uni-list>
		</div>

		<div class="ad-2">
			<ad unit-id="adunit-2cd35ad2fbde42d1"></ad>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import uniList from '@/components/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';

export default {
	name: 'about',
	components: { uniList, uniListItem, uniNoticeBar },
	computed: mapState(['allSelect']),
	methods: {
		setAllSelect() {
			this.$store.commit('SET_ALLSELECT', !this.allSelect);
		}
	}
};
</script>
<style scoped>

.app-about {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
}

	
.about-header {
	width: 100%;
}
.img-control {
	display: flex;
	justify-content: center;
	margin: 30px 0px;
	padding: 5px;
}
.img-control img {
	border-radius: 50%;
	width: 85px;
	height: 85px; 
}
.ad-2 {  
	width: 100%;
}
</style>
