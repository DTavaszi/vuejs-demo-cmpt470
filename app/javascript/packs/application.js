/* eslint no-console: 0 */
import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Home from '../components/Home'
import Hello from '../components/Hello'


const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: Hello }
]

Vue.use(VueRouter)
Vue.use(Vuex)

var router = new VueRouter({
  mode: 'history',
  routes
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
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
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
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
