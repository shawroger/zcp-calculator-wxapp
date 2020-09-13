<template>
  <div class="app-list">
    <div class="flex-list">
		<div 
			:key="i" 
			class="flex-col" 
			v-for="item in cards" 
			style="width: 20%;"
		>
        <div class="box">
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
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
}
.flex-list {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
}
.flex-col {
  display: flex;
  justify-content: center;
}
.box {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdfe6;
  font-size: 20px;
  font-family: Tahoma;
  margin: 8px 0;
}
.text-default {
  color: #606266;
}

.text-set {
  color: orange;
}
</style>
