<template>
  <div class="app-list">
    <div class="flex-list">
		<div 
			:key="index" 
			class="flex-col" 
			v-for="(item, index) in cards" 
		>
        <div :class="['box', item ? 'box-filled' : 'box-empty']">
          <span :class="[item ? 'text-set' : 'text-default']">
            {{ item ? item.name : "?" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
	
export default {
  name: "app-list",
  props: {
    cards: {
      default: () => []
    },
  },
  data() {
    return {
	};
  }, 
};
</script>

<style scoped>
.app-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
}
.flex-list {
  width: 90%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  padding: 24px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.8);
}
.flex-col {
  display: flex;
  justify-content: center;
}
.box {
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.box-empty {
  background: #f8fafc;
  border: 1.5px dashed #cbd5e1;
}
.box-filled {
  background: #eff6ff;
  border: 1.5px solid #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.12);
  transform: translateY(-2px);
}
.text-default {
  color: #94a3b8;
  font-weight: 500;
}
.text-set {
  color: #2563eb;
  font-weight: 700;
}
</style>
