<template>
<uni-shadow-root class="vant-badge-group-index"><view class="van-badge-group van-hairline--top-bottom custom-class">
  <slot></slot>
</view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'vant/badge-group/index'
import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'badge',
        type: 'descendant',
        linked(target) {
            this.badges.push(target);
            this.setActive(this.data.active);
        },
        unlinked(target) {
            this.badges = this.badges.filter(item => item !== target);
            this.setActive(this.data.active);
        }
    },
    props: {
        active: {
            type: Number,
            value: 0,
            observer: 'setActive'
        }
    },
    beforeCreate() {
        this.badges = [];
        this.currentActive = -1;
    },
    methods: {
        setActive(active) {
            const { badges, currentActive } = this;
            if (!badges.length) {
                return Promise.resolve();
            }
            this.currentActive = active;
            const stack = [];
            if (currentActive !== active && badges[currentActive]) {
                stack.push(badges[currentActive].setActive(false));
            }
            if (badges[active]) {
                stack.push(badges[active].setActive(true));
            }
            return Promise.all(stack);
        }
    }
});
export default global['__wxComponents']['vant/badge-group/index']
</script>
<style platform="mp-weixin">
@import '../common/index.css';.van-badge-group{width:85px}
</style>