<template>
  <div class="app-board">
    
    <div class="flex-list">
      <div class="flex-col" v-for="(item, index) in cards" :key="index">
        <button
          plain
          type="default"
          @click="btnClick(item)"
          >{{ item.name }}
		</button>
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

<style scoped>
button {
  width: 55px !important;
  margin-bottom: 5px;
  color: grey;
  font-size: 15px;
}

button[type=default][plain] {
	border: 0.5px solid lightgrey;
}

</style>

<style scoped>
.app-board {
  display: flex;
  margin: 10px;
  justify-content: center;
  margin-bottom: 35px;
}
.flex-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 86%;
  padding: 20px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
}
.flex-col {
  width: 25%;
  display: flex;
  justify-content: center;
  margin: 5px 0px;
}
</style>
