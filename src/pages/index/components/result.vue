<template>
  <div class="app-result">
    <van-collapse v-model="activeName" accordion @change="panelClick">
      <van-collapse-item title=" " name="1">
        <van-cell-group>
          <van-cell
            title="分组一"
            value="分组二"
            title-class="title-class"
            value-class="value-class"
          />
          <van-cell
            v-if="result.length === 0"
            title="暂无结果"
            title-class="title-class"
          />
          <van-cell
            v-for="(v, k) in filteredResult"
            :key="k"
            :title="v[0]"
            :value="v[1]"
            title-class="title-class"
            value-class="value-class"
          />
        </van-cell-group>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app-result",
  props: {
    openPanel: {
      default: false
    },
    result: {
      default: () => []
    }
  },
  data() {
    return {
      activeName: "0",
    };
  },
  methods: {
    panelClick() {
      this.$emit("panel-click");
    },
  },
  computed: {
    ...mapState(["allSelect"]),
    filteredResult() {
      return this.allSelect ? this.result.slice(0, 5) : this.result;
    }
  },
  watch: {
    openPanel(val) {
      this.activeName = val ? "1" : "0";
    }
  },
};
</script>

<style>
.title-class {
  color: grey !important;
  text-align: center !important;
}
.value-class {
  color: grey !important;
  text-align: center !important;
}
</style>

<style scoped>
.app-result {
  margin: 15px;
}
</style>
