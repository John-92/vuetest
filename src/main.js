import { createApp } from 'vue'
import App from './MyApp.vue'
// import navBar from './components/navBar'

createApp(App)
    // .component("navBar",navBar)//注册全局组件，一般很少使用，一般是通过注册为局部组件
    .mount('#app')
/*
es6导入方式一
export default {
  createApp: function(){

   }
}
// 引用
import Vue from 'vue'导入vue模块
Vue.createApp()
//es6导入方式二
function createApp(){}
export {createApp}
// 引用
import {createApp} from 'vue'

 */