(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bac7a"],{3953:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"restaurant"},[a("div",{staticClass:"page"},[a("el-form",{ref:"form",staticStyle:{width:"1000px"},attrs:{model:t.form}},[a("div",{staticClass:"book"},[a("el-form-item",{attrs:{label:"大人"}},[a("el-input",{attrs:{placeholder:"幾位大人"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"小孩"}},[a("el-input",{attrs:{placeholder:"幾位小孩"},model:{value:t.to.name,callback:function(e){t.$set(t.to,"name",e)},expression:"to.name"}})],1),a("el-form-item",{attrs:{label:"入住日期"}},[a("el-col",{staticStyle:{width:"100%"},attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"入住日期"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1)],1),a("el-form-item",{attrs:{label:"退房日期"}},[a("el-col",{staticStyle:{width:"100%"},attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"退房日期"},model:{value:t.to.date,callback:function(e){t.$set(t.to,"date",e)},expression:"to.date"}})],1)],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.loadLastData}},[t._v("載入上一次填寫內容")]),a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("旅館查詢")]),a("el-button",{on:{click:function(e){t.handleReset(t.form),t.handleReset(t.to)}}},[t._v("重置內容")])],1)],1)],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hot"},[a("b",[t._v("熱門飯店")]),a("div",{staticClass:"my-grid wrap",attrs:{"data-row-split":"5"}},[a("div",{staticClass:"grid hotelHot"},[a("div",{staticClass:"content"})]),a("div",{staticClass:"grid hotelHot"},[a("div",{staticClass:"content"})]),a("div",{staticClass:"grid hotelHot"},[a("div",{staticClass:"content"})]),a("div",{staticClass:"grid hotelHot"},[a("div",{staticClass:"content"})]),a("div",{staticClass:"grid hotelHot"},[a("div",{staticClass:"content"})])])])}],i=(a("ac6a"),a("456d"),a("2f62"),{name:"Airplane",data:function(){return{form:{name:"",prefer:"",date:"",type:[]},to:{name:"",prefer:"",date:"",type:[]}}},created:function(){},methods:{onSubmit:function(){var t=this.form,e=this.to;localStorage.setItem("form",JSON.stringify(t)),localStorage.setItem("to",JSON.stringify(e))},loadLastData:function(){var t=JSON.parse(localStorage.getItem("form")),e=JSON.parse(localStorage.getItem("to"));this.form=t,this.to=e},handleReset:function(t){this.resetForm(t),this.resetTo(t),t.date=""},resetForm:function(t){var e=function t(e){Object.keys(e).map(function(a){if(e[a]===Object(e[a]))return t(e[a]),void(e[a]instanceof Array&&(e[a]=[]));e[a]=""})};e(t)},resetTo:function(t){var e=function t(e){Object.keys(e).map(function(a){if(e[a]===Object(e[a]))return t(e[a]),void(e[a]instanceof Array&&(e[a]=[]));e[a]=""})};e(t)}},computed:{}}),r=i,l=a("2877"),n=Object(l["a"])(r,o,s,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0bac7a.b1de4245.js.map