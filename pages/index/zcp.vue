<template>
  <div class="app-main">
	 <div class="app-element">
		<app-list :cards="cards"></app-list>
		<app-result
		  @panel-click="panelClick"
		  :openPanel="openPanel"
		  :result="result"
		></app-result>
		<app-board @click="boardClick"></app-board>
	 </div>
	<div class="ad-1">
		<ad unit-id="adunit-4d481dd20e5c6f5c"></ad>
	</div>
  </div>
</template>

<script>
import appList from "./components/list";
import appResult from "./components/result";
import appBoard from "./components/board";
import { zcp } from "@/utils/zcp.js";

export default {
  data() {
    return {
      cards: Array(10).fill(undefined),
      result: [],
	  openPanel: false,
    };
  },
  methods: {
    arrayToStr(arr) {
      let str = "";
      arr
        .map(v => {
          for (let i in this.cards) {
            if (this.cards[i].value === v) {
              return this.cards[i].name;
            }
          }
        })
        .forEach(v => {
          str += v + " + ";
        });
      return str.slice(0, -3);
    },
    boardClick(e) {
		
	  const cardsLen = this.cards.filter(val => val === undefined).length;
      if (e.value > 0) {
        if (cardsLen > 0) {
          this.cards[10 - cardsLen] = e;
          this.result = [];
          this.openPanel = false;
        }
      } else if (e.value === 0) {
        this.cards = Array(10).fill(undefined);
        this.result = [];
        this.openPanel = false;
      } else if (e.value === -1) {
        this.cards[10 - cardsLen - 1] = undefined;
        this.result = [];
        this.openPanel = false;
      } else {
        this.openPanel = true;
        const cardValues = this.cards.
			filter(v => v !== undefined).
			map(v => v.value);
        const result = zcp.filter(zcp.sort(zcp.when(cardValues)));
        this.result = result.map(v => {
          const v0 = this.arrayToStr(v[0]);
          const v1 = this.arrayToStr(v[1]);
          return [v0, v1];
        });
      }
    },
    panelClick() {
      this.openPanel = !this.openPanel;
    }
  },
  components: {
    appList,
    appBoard,
    appResult
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
