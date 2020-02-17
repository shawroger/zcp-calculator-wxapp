<template>
<uni-shadow-root class="vant-submit-bar-index"><view class="van-submit-bar custom-class">
  <slot name="top"></slot>

  <view class="van-submit-bar__tip">
    <van-icon v-if="tipIcon" size="12px" :name="tipIcon" custom-class="van-submit-bar__tip-icon"></van-icon>
    <view v-if="hasTip" class="van-submit-bar__tip-text">
      {{ tip }}
    </view>
    <slot name="tip"></slot>
  </view>

  <view :class="'bar-class '+(utils.bem('submit-bar__bar', { safe: safeAreaInsetBottom && isIPhoneX }))">
    <slot></slot>
    <view v-if="hasPrice" class="van-submit-bar__text">
      <text>{{ label || '合计：' }}</text>
      <text class="van-submit-bar__price price-class">
        <text class="van-submit-bar__currency">{{ currency }} </text>
        <text>{{ priceStr }}</text>
      </text>
      <text class="van-submit-bar__suffix-label">{{ suffixLabel }}</text>
    </view>
    <van-button square size="large" :type="buttonType" :loading="loading" :disabled="disabled" class="van-submit-bar__button" custom-class="button-class" @click="onSubmit">
      {{ loading ? '' : buttonText }}
    </van-button>
  </view>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>
import VanButton from '../button/index.vue'
import VanIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'van-button': VanButton,'van-icon': VanIcon}}

global['__wxRoute'] = 'vant/submit-bar/index'
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
    classes: [
        'bar-class',
        'price-class',
        'button-class'
    ],
    props: {
        tip: {
            type: null,
            observer: 'updateTip'
        },
        tipIcon: String,
        type: Number,
        price: {
            type: null,
            observer: 'updatePrice'
        },
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        },
        decimalLength: {
            type: Number,
            value: 2,
            observer: 'updatePrice'
        },
        suffixLabel: String
    },
    methods: {
        updatePrice() {
            const { price, decimalLength } = this.data;
            this.set({
                hasPrice: typeof price === 'number',
                priceStr: (price / 100).toFixed(decimalLength)
            });
        },
        updateTip() {
            this.set({ hasTip: typeof this.data.tip === 'string' });
        },
        onSubmit(event) {
            this.$emit('submit', event.detail);
        }
    }
});
export default global['__wxComponents']['vant/submit-bar/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-submit-bar{position:fixed;bottom:0;left:0;z-index:100;width:100%;-webkit-user-select:none;user-select:none}.van-submit-bar__tip{padding:10px;font-size:12px;line-height:1.5;color:#f56723;background-color:#fff7cc}.van-submit-bar__tip:empty{display:none}.van-submit-bar__tip-icon{width:12px;height:12px;margin-right:4px;vertical-align:middle}.van-submit-bar__tip-text{display:inline;vertical-align:middle}.van-submit-bar__bar{display:-webkit-flex;display:flex;height:50px;font-size:14px;background-color:#fff;-webkit-align-items:center;align-items:center;-webkit-justify-content:flex-end;justify-content:flex-end}.van-submit-bar__bar--safe{padding-bottom:34px}.van-submit-bar__text{padding-right:12px;font-weight:500;color:#333;-webkit-flex:1;flex:1;text-align:right}.van-submit-bar__price{font-size:18px;color:#f44}.van-submit-bar__currency{font-size:14px}.van-submit-bar__suffix-label{margin-left:5px}.van-submit-bar__button{width:110px}
</style>