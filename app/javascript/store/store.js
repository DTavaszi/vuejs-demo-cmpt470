import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    newUser: '',
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    ADD_USER: function(state) {
      state.users.push({
        user: state.newUser,
        admin: false
      })
    },
    GET_USER: function(state, user) {
      state.newUser = user
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    decrement (context) {
      context.commit('decrement')
    },
    getUser ({commit}, user) {
      commit('GET_USER')
    },
    addUser ({commit}, user) {
      commit('ADD_USER', user)
    }
  },
  getters: {
    newUser: state => state.newUser,
    users: state => state.users
  }
})

export default store;
