<template>
  <div class="about-header">
    <van-notice-bar
      text="张昌蒲计算器经典服适应版更新了"
      left-icon="volume-o"
      mode="closeable"
    />
    <div class="img-control">
      <img class="img-control-logo" src="/static/images/logo.png" />
    </div>
    <van-cell-group>
      <van-cell title="应用版本" value="3.0.0" />
      <van-cell title="小程序名称" value="张昌蒲计算器" />
      <van-cell title="小程序开发者" value="蒸蒸日上欧" />
	  <van-cell center title="启用十张牌计算模式">
	    <van-switch :checked="use10cards" @change="setUse10cards" />
	  </van-cell>
      <van-cell center title="只展示前三项筛选结果">
        <van-switch :checked="allSelect" @change="setAllSelect" />
      </van-cell>
	  
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "about-header",
  data() {
    return {
      allSelect: true,
	  use10cards: true
    };
  },
  methods: {
    setAllSelect() {
      this.allSelect = !this.allSelect;
      this.$store.commit("SET_ALLSELECT", this.allSelect);
    },
		
	setUse10cards() {
		this.use10cards = !this.use10cards;
		this.$store.commit("SET_USE10CARDS", this.use10cards);
	}
  }
};
</script>
<style scoped>
.img-control {
  display: flex;
  justify-content: center;
  margin: 30px 0px;
}
.img-control-logo {
  border-radius: 50%;
  width: 85px;
  height: 85px;
  margin: auto 0;
}
</style>
