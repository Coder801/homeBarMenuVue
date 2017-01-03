// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('normalize.css')

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'

import Alcohol from './components/Alcohol'
import Cocktails from './components/Cocktails'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/alcohol', component: Alcohol
  }, {
    path: '/cocktails', component: Cocktails
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
