import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

import users from './modules/users'
import friends from './modules/friends'
import messages from './modules/messages'
import messageNotifications from './modules/messageNotifications'
import authentication from './modules/authentication'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users,
    friends,
    messages,
    messageNotifications,
    authentication
  }
})

export default store
