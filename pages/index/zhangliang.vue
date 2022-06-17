<template>
	<div class="app-main">
	
		<div class="app-element">
			<app-list :cards="cards.concat(extraCards)"></app-list>
			<app-result @panel-click="panelClick" :openPanel="openPanel" :result="result" :colText="['分配点数', '补充点数']" :forceAll="true"></app-result>
			<app-board @click="boardClick"></app-board>
		</div>
		
		<uni-popup ref="popup" type="message">
		    <uni-popup-message 
				type="warn" 
				:duration="2000"
				message="您输入的数据过多,计算量超出允许范围!">
			</uni-popup-message>
		</uni-popup>
		<div class="ad-1">
			<ad unit-id="adunit-d4a513e8fa14367b"></ad>
		</div>
	</div>
</template>

<script>
import appList from './components/list';
import appResult from './components/result';
import appBoard from './components/board';

import uniPopup from '@/components/uni-popup/uni-popup.vue'
import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'


import { ZL } from '@/utils/more.js';
import { cards } from '@/utils/card.js';

export default {
	data() {
		return {
			cards: Array(10).fill(undefined),
			extraCards: [],
			result: [],
			openPanel: false
		};
	},
	methods: {
		boardClick(e) {
			const cardsLen = this.cards.filter(val => val === undefined).length;
			if (e.value > 0) {
				if(this.extraCards.length > (5 - 1)) {
					this.$refs.popup.open();
					return false;
				}
				
				if (cardsLen > 0) {
					this.cards[10 - cardsLen] = e;
					this.result = [];
					this.openPanel = false;
				} else {
					this.extraCards.push(e);
				}
			} else if (e.value === 0) {
				this.cards = Array(10).fill(undefined);
				this.extraCards = [];
				this.result = [];
				this.openPanel = false;
			} else if (e.value === -1) {
				if (this.extraCards.length > 0) {
					this.extraCards = this.extraCards.slice(0, -1);
				} else {
					this.cards[10 - cardsLen - 1] = undefined;
					this.result = [];
				}
				
				this.openPanel = false;
			} else { 
			 
				const r =  ZL.calc(
						 this.cards.
							concat(this.extraCards).
							filter(
								v => v !== undefined
							).map(v => v.value));
							
				this.result = r.filter(v => v[0]!=0 && v[1]!=0).map(
					v => [
						v[0].map(t => cards[Number(t) - 1].name).join(" + "), 
						cards[Number(v[1]) - 1].name
					]
				); 
							 
				this.openPanel = true;
			}
			 
		},
		panelClick() {
			this.openPanel = !this.openPanel;
		}
	},
	components: {
		appList,
		appBoard,
		appResult,
		uniPopup,
		uniPopupMessage,
		uniPopupDialog
	}
};
</script>

<style>
.app-main {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 100vh;
}

.app-element {
	padding-top: 40px;
}
.ad-1 {
	width: 100%;
}
</style>
