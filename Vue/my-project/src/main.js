// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './router/index'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  router,
  store
})
