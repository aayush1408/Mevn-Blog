// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import route from './route.js'

Vue.use(VueRouter);
// Vue.config.productionTip = false

const router = new VueRouter({
    routes:route,
    mode:'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  template: '<router-view></router-view>',
  // mode:'history',   
})
