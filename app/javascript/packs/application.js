/* eslint no-console: 0 */
import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import store from 'store/store.js'


import Home from 'components/Home'
import Landing from 'components/Landing'
import Admin from 'components/Admin'
import Login from 'components/Login'
import Register from 'components/Register'

import authentication from 'components/Login/authentication'

const routes = [
  { path: '/', component: Home, meta: { requiresLogin: true } },
  { path: '/admin', component: Admin, meta: { requiresLogin: true, requiresAdmin: true} },
  { path: '/landing', component: Landing },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

Vue.use(VueRouter)
Vue.use(Vuetify)

var router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const requiresLogin = to.matched.some(record => record.meta.requiresLogin)
  if (requiresLogin) {
    authentication.identifyLoggedUser(store)
    .then(() => {
      console.log('logged_in')
      next()
    })
    .catch(() => {
      next('/landing')
    })
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  data: {
    /*items: [
      { icon: 'contacts', text: 'Contacts' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'settings', text: 'Settings' }
    ]*/
  },
  store,
  router,
  computed: {
    count: function() {
      return store.state.count
    }
  }
})
