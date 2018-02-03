/* eslint no-console: 0 */
import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'

import App from '../app.vue'
import Home from '../components/Home'
import Hello from '../components/Hello'


const routes = [
  { path: '/', component: App },
  { path: '/hello', component: Hello }
]

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
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
