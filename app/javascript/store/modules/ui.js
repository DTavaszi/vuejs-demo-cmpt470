const ui = {
  state: {
    selectedItem: 0,
    selectedType: ''
  },
  mutations: {
    SET_SELECTION: function(state, item) {
      state.selectedItem = item
    },
    SET_SELECTED_TYPE: function(state, selectedType) {
      state.selectedType = selectedType
    }
  },
  actions: {
    setSelection({commit}, item) {
      commit('SET_SELECTION', item)
    },
    setSelectedType({commit}, selectedType) {
      commit('SET_SELECTED_TYPE', selectedType)
    }
  },
  getters: {
    selectedItem: state => state.selectedItem,
    selectedType: state => state.selectedType
  }
}

export default ui
