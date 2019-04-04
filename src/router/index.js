import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: resolve => require(['@/views/HomeView'], resolve)
    },
    {
      path: '/CityView',
      name: 'CityView',
      component: resolve => require(['@/views/CityView'], resolve)
    }
  ]
})
