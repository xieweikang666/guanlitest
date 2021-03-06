// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import axios from 'axios'
import store from './store'


Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token');
  if (to.path == '/') { // 如果是跳转到登录页的
    if (token != 'null' && token != null) {
      next('/homepage') // 如果有token就转向todolist不返回登录页
    }
    next(); // 否则跳转回登录页
  } else {
    if (token != 'null' && token != null) {
      // Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      next() // 如果有token就正常转向
    } else {
      next('/') // 否则跳转回登录页
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


