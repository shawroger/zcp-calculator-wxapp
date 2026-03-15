<template>
  <div class="app-board">
    
    <div class="flex-list">
      <div class="flex-col" v-for="(item, index) in cards" :key="index">
        <button
          plain
          type="default"
          hover-class="board-btn-hover"
          :hover-start-time="0"
          :hover-stay-time="100"
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
  width: 100% !important;
  height: 56px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #334155 !important;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 500;
  border-radius: 12px;
  background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%) !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 
    0 4px 0 #cbd5e1,
    0 6px 12px rgba(15, 23, 42, 0.05),
    inset 0 1px 1px #ffffff !important;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  top: 0;
}

button::after {
  border: none !important;
}

button[type=default][plain] {
  border: 1px solid #e2e8f0 !important;
  color: #334155;
}

button:active,
.board-btn-hover {
  top: 4px;
  box-shadow: 
    0 0px 0 #cbd5e1,
    0 2px 4px rgba(15, 23, 42, 0.03),
    inset 0 1px 2px rgba(15, 23, 42, 0.02) !important;
  background: #f1f5f9 !important;
}

.app-board {
  display: flex;
  margin: 24px 0;
  justify-content: center;
  width: 100%;
}

.flex-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 12px;  /* 增加纵向间距留给阴影 */
  width: 90%;
  box-sizing: border-box;
  padding: 24px;
  background: #f8fafc;
  border-radius: 24px;
  box-shadow: 
    inset 0 2px 4px rgba(15, 23, 42, 0.02),
    0 12px 32px rgba(15, 23, 42, 0.04), 
    0 2px 6px rgba(15, 23, 42, 0.02);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.flex-col {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
