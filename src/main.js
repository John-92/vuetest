import { createApp } from 'vue'
import App from './MyApp.vue'
// import navBar from './components/navBar'

createApp(App)
    // .component("navBar",navBar)//ע��ȫ�������һ�����ʹ�ã�һ����ͨ��ע��Ϊ�ֲ����
    .mount('#app')
/*
es6���뷽ʽһ
export default {
  createApp: function(){

   }
}
// ����
import Vue from 'vue'����vueģ��
Vue.createApp()
//es6���뷽ʽ��
function createApp(){}
export {createApp}
// ����
import {createApp} from 'vue'

 */