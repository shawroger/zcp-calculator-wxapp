<template>
	<div class="app-result">
		<uni-collapse>
			<uni-collapse-item :open="openPanel" @change="panelClick">
				<uni-list>
					<t-table border="0">
						<t-tr>
							<t-th>{{colText[0]}}</t-th>
							<t-th v-if="colText[1]">{{colText[1]}}</t-th>
							<t-th v-if="colText[2]">{{colText[2]}}</t-th>
						</t-tr>

						<template v-if="filteredResult.length > 0">
							<t-tr v-for="(v, k) in filteredResult" :key="k">
								<t-td>{{ v[0] }}</t-td>
								<t-td v-if="v[1] != undefined">{{ v[1] }}</t-td>
								<t-td v-if="v[2] != undefined">{{ v[2] }}</t-td>
							</t-tr>
						</template>

						<template v-else>
							<t-td>无结果</t-td>
						</template>
					</t-table>
				</uni-list>
			</uni-collapse-item>
		</uni-collapse>
	</div>
</template>

<script>
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';

import tTable from '@/components/t-table/t-table.vue';
import tTh from '@/components/t-table/t-th.vue';
import tTr from '@/components/t-table/t-tr.vue';
import tTd from '@/components/t-table/t-td.vue';

export default {
	name: 'app-result',
	components: { uniCollapse, uniCollapseItem, tTable, tTh, tTr, tTd },
	props: {
		openPanel: {
			default: false
		},
		result: {
			default: () => []
		},		
		colText: {
			default:  ["分组一", "分组二"]
		},
		forceAll: {
			default: false
		},
	},
	data() {
		return {};
	},
	methods: {
		panelClick() {
			this.$emit('panel-click');
		}
	},
	computed: {
		filteredResult() {
			return this.forceAll ? 
				this.result : 
				this.$store.state.allSelect ? 
					this.result.slice(0, 3) : this.result;
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
t-table {
	padding-bottom: 5px;
}
</style>

<style scoped>
.app-result {
	margin: 15px;
}
</style>
