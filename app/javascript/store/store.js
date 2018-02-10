import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import users from './modules/users'
import friends from './modules/friends'
import messages from './modules/messages'
import ui from './modules/ui'
import authentication from './modules/authentication'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users,
    friends,
    messages,
    authentication,
    ui
  }
})

export default store
