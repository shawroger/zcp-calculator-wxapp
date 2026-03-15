<template>
	<div class="menu-wrap"><uni-card mode="style" :title="name" :is-shadow="false" :thumbnail="img" @click="changePage" class="saas-card" /></div>
</template>

<script>
import uniCard from '@/components/uni-card/uni-card.vue';
export default {
	name: 'menu-item',
	components: { uniCard },
	props: {
		name: {
			type: String,
			default: ''
		},

		img: {
			type: String,
			default: ''
		},
		page: {
			type: String,
			default: ''
		},
		component: {
			type: String,
			default: ''
		}
	},
	methods: {
		changePage() {
			uni.navigateTo({
				url: this.page
			})
		}
	}
};
</script>

<style scoped>
.menu-wrap {
  margin: 12px 16px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}
.menu-wrap:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
::v-deep .uni-card {
  margin: 0 !important;
  border: none !important;
  padding: 16px 12px !important;
}
::v-deep .uni-card__header-title-text {
  font-size: 16px !important;
  color: #1e293b !important;
  font-weight: 600 !important;
}
::v-deep .uni-card__thumbnailimage {
  border-radius: 12px !important;
  width: 48px !important;
  height: 48px !important;
}
</style>
