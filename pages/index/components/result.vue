<template>
	<div class="app-result">
		<uni-collapse>
			<uni-collapse-item :open="openPanel" @change="panelClick">
				<uni-list>
					<div class="result-list-container">
						<template v-if="filteredResult.length > 0">
							<div class="result-card" v-for="(v, k) in filteredResult" :key="k">
								<div class="result-index">{{ k + 1 }}</div>
								<div class="result-content">
									<div class="result-row">
										<span class="result-label">{{ colText[0] }}</span>
										<span class="result-value">{{ v[0] }}</span>
									</div>
									<div class="result-row" v-if="colText[1] && v[1] !== undefined">
										<span class="result-label">{{ colText[1] }}</span>
										<span class="result-value">{{ v[1] }}</span>
									</div>
									<div class="result-row" v-if="colText[2] && v[2] !== undefined">
										<span class="result-label">{{ colText[2] }}</span>
										<span class="result-value">{{ v[2] }}</span>
									</div>
								</div>
							</div>
						</template>
						<template v-else>
							<div class="result-empty">
								<span class="empty-text">暂无计算结果</span>
							</div>
						</template>
					</div>
				</uni-list>
			</uni-collapse-item>
		</uni-collapse>
	</div>
</template>

<script>
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';


export default {
	name: 'app-result',
	components: { uniCollapse, uniCollapseItem },
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
	font-weight: 600;
}
.title-class {
	color: #64748b !important;
	text-align: center !important;
}
.value-class {
	color: #334155 !important;
	text-align: center !important;
}
</style>

<style scoped>
.app-result {
	margin: 16px;
	background: #ffffff;
	border-radius: 16px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
	border: 1px solid rgba(226, 232, 240, 0.8);
	overflow: hidden;
}
::v-deep .uni-collapse {
    background-color: transparent !important;
}
::v-deep .uni-collapse-item__title {
    background-color: transparent !important;
    border-bottom: 1px solid #f1f5f9;
}
.result-list-container {
	padding: 12px;
	background-color: #f8fafc;
}
.result-card {
	background: #ffffff;
	border-radius: 12px;
	padding: 12px;
	margin-bottom: 8px;
	display: flex;
	align-items: flex-start;
	box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);
	border: 1px solid #f1f5f9;
	transition: all 0.2s ease;
}
.result-card:last-child {
	margin-bottom: 0;
}
.result-index {
	background: #f1f5f9;
	color: #64748b;
	font-size: 13px;
	font-weight: 700;
	width: 24px;
	height: 24px;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 12px;
	flex-shrink: 0;
}
.result-content {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.result-row {
	display: flex;
	flex-direction: column;
	gap: 2px;
}
.result-label {
	font-size: 11px;
	color: #94a3b8;
	font-weight: 500;
}
.result-value {
	font-size: 14px;
	color: #1e293b;
	font-weight: 500;
	line-height: 1.4;
	word-break: break-all;
}
.result-empty {
	padding: 24px 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.empty-text {
	color: #94a3b8;
	font-size: 13px;
}
</style>
