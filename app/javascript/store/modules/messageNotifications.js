const messageNotifications = {
  state: {
    messageNotifications: [],
    messageNotificationsQuerying: false
  },
  mutations: {
    SET_MESSAGE_NOTIFICATIONS: function(state, messageNotifications) {
      state.messageNotifications = messageNotifications
    },
    ADD_MESSAGE_NOTIFICATION: function(state, messageNotification) {
      state.messageNotification.push(messageNotification)
    },
    UPDATE_MESSAGE_NOTIFICATION: function(state, messageNotification) {
      state.messageNotifications.find(el => el.id == messageNotification.id).notify = false
    },
    SET_MESSAGE_NOTIFICATIONS_QUERYING: function(state, messageNotificationsQuerying) {
      state.messageNotificationsQuerying = messageNotificationsQuerying
    }
  },
  actions: {
    setMessageNotifications({commit}, messageNotifications) {
      commit('SET_MESSAGE_NOTIFICATIONS', messageNotifications)
    },
    addMessageNotification({commit}, messageNotification) {
      commit('ADD_MESSAGE_NOTIFICATION', messageNotification)
    },
    updateMessageNotification({commit}, messageNotification) {
      commit('UPDATE_MESSAGE_NOTIFICATION', messageNotification)
    },
    setMessageNotificationsQuerying({commit}, messageNotificationsQuerying) {
      commit('SET_MESSAGE_NOTIFICATIONS_QUERYING', messageNotificationsQuerying)
    }
  },
  getters: {
    messageNotifications: state => state.messageNotifications,
    messageNotificationsQuerying: state => state.messageNotificationsQuerying
  }
}

export default messageNotifications
