<template>
	<div><uni-card mode="style" :title="name" :is-shadow="true" :thumbnail="img" @click="changePage" /></div>
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

<style></style>
