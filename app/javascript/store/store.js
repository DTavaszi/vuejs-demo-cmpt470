import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import users from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users
  },
  state: {
    // Initial condition. If window is refreshed, then check if there's a login token already
    isLoggedIn: !!localStorage.getItem('lbUser')
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
})

export default store
