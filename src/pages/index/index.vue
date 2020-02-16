<template>
  <div class="app">
    <app-list :cards="cards"></app-list>
    <app-result
      @panel-click="panelClick"
      :openPanel="openPanel"
      :result="result"
    ></app-result>
    <app-board @click="boardClick"></app-board>
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
      cards: [],
      openPanel: false,
      result: []
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
      if (e.value > 0) {
        if (this.cards.length < 8) {
          this.cards.push(e);
          this.result = [];
          this.openPanel = false;
        }
      } else if (e.value === 0) {
        this.cards = [];
        this.result = [];
        this.openPanel = false;
      } else if (e.value === -1) {
        this.cards = this.cards.slice(0, -1);
        this.result = [];
        this.openPanel = false;
      } else {
        this.openPanel = true;
        const cardValues = this.cards.map(v => v.value);
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

<style scoped>
.app {
  margin-top: 60px;
}
</style>
