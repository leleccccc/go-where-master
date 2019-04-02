// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/reset.css' // 默认样式
import '@/assets/styles/iconfont.css' // 阿里巴巴图库

// 处理移动端click事件300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

// Swiper组件4.x版本
/* eslint-disable */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
/* eslint-enable */
Vue.use(VueAwesomeSwiper)

// axios
import axios from 'axios'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
