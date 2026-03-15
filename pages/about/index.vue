<template>
	<div class="app-about">
		<div class="about-header">
			<uni-notice-bar text="优化计算器 UI”" showClose="true" showIcon="true" />
			<div class="img-control"><img src="/static/images/logo.png" /></div>

			<uni-list>
				<uni-list-item title="应用版本" rightText="4.2.1" />
				<uni-list-item title="程序开发" rightText="Roger" />
				<uni-list-item title="更新日期" rightText="2026-03-15" />
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
	box-sizing: border-box;
	padding-bottom: 24px;
}

.about-header {
	width: 100%;
}
.img-control {
	display: flex;
	justify-content: center;
	margin: 40px 0px 32px 0px;
	padding: 5px;
}
.img-control img {
	border-radius: 20px;
	width: 88px;
	height: 88px; 
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
.ad-2 {  
	width: 100%;
	padding: 0 16px;
	box-sizing: border-box;
}
::v-deep .uni-noticebar {
    margin: 16px 16px 0 16px !important;
    border-radius: 12px !important;
}
::v-deep .uni-list {
    margin: 0 16px !important;
    border-radius: 16px !important;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04) !important;
    border: 1px solid rgba(226, 232, 240, 0.8) !important;
}
::v-deep .uni-list:before, ::v-deep .uni-list:after {
    display: none !important;
}
::v-deep .uni-list-item__container {
    padding: 16px !important;
}
::v-deep .uni-list-item__content-title {
    color: #475569 !important;
    font-size: 15px !important;
}
::v-deep .uni-list-item__extra-text {
    color: #0f172a !important;
    font-weight: 500 !important;
}
</style>
