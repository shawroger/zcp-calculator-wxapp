<template>
  <div class="app-board">
    
    <div class="flex-list">
      <div class="flex-col" v-for="(item, index) in cards" :key="index">
        <van-button
          class="van-button"
          plain
          type="default"
          @click="btnClick(item)"
          >{{ item.name }}</van-button
        >
      </div>
    </div> 
  </div>
</template>

<script>
import { cards } from "@/utils/card";
export default {
  name: "app-board",
  data() {
    return {
      cards
    };
  },
  methods: {
    btnClick(e) {
      const msg = {
        name: e.name,
        value: e.value
      };
      this.$emit("click", msg);
    }
  }
};
</script>

<style>
.van-button {
  width: 55px;
  margin-bottom: 5px;
  color: grey;
}
</style>

<style scoped>
.app-board {
  display: flex;
  margin: 15px;
  justify-content: center;
  margin-bottom: 35px;
}
.flex-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 85%;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
}
.flex-col {
  width: 25%;
  display: flex;
  justify-content: center;
}
</style>
