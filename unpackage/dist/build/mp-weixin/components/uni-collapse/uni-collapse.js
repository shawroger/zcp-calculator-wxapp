(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"0f2d":function(n,t,e){"use strict";e.r(t);var u=e("2bd3"),a=e("23be");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("38d4");var r,o=e("f0c5"),i=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"2f05f753",null,!1,u["a"],r);t["default"]=i.exports},"23be":function(n,t,e){"use strict";e.r(t);var u=e("68d3"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},"2bd3":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},"38d4":function(n,t,e){"use strict";var u=e("6fa5"),a=e.n(u);a.a},"68d3":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=u},"6fa5":function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0f2d"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
