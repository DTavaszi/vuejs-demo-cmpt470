/* eslint no-console: 0 */
import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import store from 'store/store.js'


import Home from 'components/Home'
import Hello from 'components/Hello'
import Login from 'components/Login'

import authentication from 'components/Login/authentication'

const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: Hello },
  { path: '/login', component: Login}
]

Vue.use(VueRouter)


var router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  computed: {
    count: function() {
      return store.state.count
    }
  },
  created: function() {
    authentication.identifyLoggedUser(this)
  }
})

// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks';
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
