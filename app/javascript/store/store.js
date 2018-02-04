import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import users from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users
  },
  state: {
    isLoggedIn: !!localStorage.getItem('lbUser')
  }
})

export default store
