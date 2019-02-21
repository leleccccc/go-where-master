// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/reset.css' // 默认样式
import '@/assets/styles/iconfont.css' // 阿里巴巴图库
import FastClick from 'fastclick' // 处理移动端click事件300毫秒延迟

FastClick.attach(document.body) // 处理移动端click事件300毫秒延迟
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
