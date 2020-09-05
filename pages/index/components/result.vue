<template>
	<div class="app-result">
		
		<uni-collapse>
			<uni-collapse-item :open="openPanel" @change="panelClick">
				<van-cell-group>
					<van-cell title="分组一" value="分组二" title-class="title-class bold-self" value-class="value-class bold-self" />
					<van-cell v-if="result.length === 0" title="暂无结果" title-class="title-class" />
					<van-cell v-for="(v, k) in filteredResult" :key="k" :title="v[0]" :value="v[1]" title-class="title-class" value-class="value-class" />
				</van-cell-group>
			</uni-collapse-item>
			
		</uni-collapse>
	</div>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'

export default {
	name: 'app-result',
	components:{uniCollapse, uniCollapseItem},
	props: {
		openPanel: {
			default: false
		},
		result: {
			default: () => []
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		panelClick() {
			this.$emit('panel-click');
		}
	},
	computed: {
		filteredResult() {
			return this.$store.state.allSelect ? this.result.slice(0, 3) : this.result;
		}
	}
};
</script>

<style>
.bold-self {
	font-weight: bold;
}
.title-class {
	color: grey !important;
	text-align: center !important;
}
.value-class {
	color: grey !important;
	text-align: center !important;
}
</style>

<style scoped>
.app-result {
	margin: 15px;
}
</style>
