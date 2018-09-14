import Vue from 'vue'
import Router from 'vue-router'
import Order from '../pages/Order/Order.vue'
import MSite from '../pages/MSite/MSite.vue'
import ProFile from '../pages/ProFile/ProFile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'MSite',
      component: MSite,
      meta:{
        showfoot:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        showfoot:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta:{
        showfoot:true
      }
    },
    {
      path: '/profile',
      name: 'ProFile',
      component: ProFile,
      meta:{
        showfoot:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }

  ]
})
