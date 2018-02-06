import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import users from './modules/users'
import authentication from './modules/authentication'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users,
    authentication
  }
})

export default store
