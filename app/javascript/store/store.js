import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    decrement (context) {
      context.commit('decrement')
    }
  }
})

export default store;
