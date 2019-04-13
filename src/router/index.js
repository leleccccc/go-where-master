import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',  需要后端配合，否则打包后网页一片空白
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
    },
    {
      path: '/SearchView',
      name: 'SearchView',
      component: resolve => require(['@/views/SearchView'], resolve)
    },
    {
      path: '/DetailView',
      name: 'DetailView',
      component: resolve => require(['@/views/DetailView'], resolve)
    }
  ]
})
