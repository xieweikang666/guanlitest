import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue'),
      children: [
        // 需要在这儿设置为子路由，否则点击左侧菜单选项，在HomePage里写的router-view 会跳转到新的页面！！！
        {
          path: '/Excel',
          name: 'Excel',
          component: () => import('../components/DataManagement/ExcelManagement.vue')
        },
        {
          path: '/Home',
          name: 'Home',
          component: () => import('../components/Home.vue')
        },
        {
          path: '/Charts',
          name: 'Charts',
          component: () => import('../components/DataManagement/ChartManagement.vue')
        },
        {
          path: '/Forms',
          name: 'Forms',
          component: () => import('../components/DataManagement/FormManagement.vue')
        },
        {
          path: '/Add',
          name: 'Add',
          component: () => import('../components/DataManagement/Add.vue')
        },
        {
          path: '/User',
          name: 'User',
          component: () => import('../components/UserManagement.vue')
        },
        {
          path: '/Test',
          name: 'Test',
          component: () => import('../components/Test.vue')
        },
        {
          path: '/UserInfo',
          name: 'UserInfo',
          component: () => import('../views/UserInfo.vue')
        },
        // {
        //   path: '/TopBread',
        //   name: 'TopBread',
        //   component: () => import('../components/TopBread.vue')
        // }
      ]
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../components/Home.vue')
    },

  ]
})
