<template>
<uni-shadow-root class="vant-tabbar-index"><view :class="'custom-class '+(border ? 'van-hairline--top-bottom' : '')+' '+(utils.bem('tabbar', { fixed, safe: isIPhoneX && safeAreaInsetBottom }))" :style="zIndex ? 'z-index: ' + zIndex : ''">
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="../wxs/utils.wxs" module="utils"></wxs>
<script>

global['__wxRoute'] = 'vant/tabbar/index'
import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    mixins: [safeArea()],
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked(target) {
            this.children.push(target);
            target.parent = this;
            target.updateFromParent();
        },
        unlinked(target) {
            this.children = this.children.filter((item) => item !== target);
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: [Number, String],
            observer: 'updateChildren'
        },
        activeColor: {
            type: String,
            observer: 'updateChildren'
        },
        inactiveColor: {
            type: String,
            observer: 'updateChildren'
        },
        fixed: {
            type: Boolean,
            value: true
        },
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    beforeCreate() {
        this.children = [];
    },
    methods: {
        updateChildren() {
            const { children } = this;
            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map((child) => child.updateFromParent()));
        },
        onChange(child) {
            const index = this.children.indexOf(child);
            const active = child.data.name || index;
            if (active !== this.data.active) {
                this.$emit('change', active);
            }
        }
    }
});
export default global['__wxComponents']['vant/tabbar/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-tabbar{display:-webkit-flex;display:flex;width:100%;height:50px;background-color:#fff}.van-tabbar--fixed{position:fixed;bottom:0;left:0}.van-tabbar--safe{padding-bottom:34px}
</style>