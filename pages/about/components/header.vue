<template>
  <div class="about-header">
    <van-notice-bar
      text="欢迎使用张昌蒲计算器"
      left-icon="volume-o"
      mode="closeable"
    />
    <div class="img-control">
      <img class="img-control-logo" src="/static/images/logo.png" />
    </div>
    <van-cell-group>
      <van-cell title="应用版本" value="2.1.0" />
      <van-cell title="小程序名称" value="张昌蒲计算器" />
      <van-cell title="小程序开发者" value="Roger Shaw" />
      <van-cell title="此人的三国杀新区账号" value="ID：蒸蒸日上欧" />
      <van-cell center title="至多展示前三项筛选结果">
        <van-switch :checked="allSelect" @change="setAllSelect" />
      </van-cell>
    </van-cell-group>
	<div class="ad-2">
		<ad unit-id="adunit-42f0b75787d8e5b9"></ad>
	</div>
	<div class="ad-2">
		<ad unit-id="adunit-2cd35ad2fbde42d1"></ad>
	</div>
  </div>
</template>

<script>
export default {
  name: "about-header",
  data() {
    return {
      allSelect: true
    };
  },
  methods: {
    setAllSelect() {
      this.allSelect = !this.allSelect;
      this.$store.commit("SET_ALLSELECT", this.allSelect);
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
.ad-2 {
	margin-top: 25px;
}
</style>
