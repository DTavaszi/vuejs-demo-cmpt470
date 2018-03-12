import HTTPService from 'HTTPService'

const CREATE_NOTIFICATION_PATH = '/message_notifications'
const GET_NOTIFICATIONS_PATH = '/message_notifications'
const UPDATE_NOTIFICATION_PATH = '/message_notifications'

export default {
  getMessageNotifications: function(context) {
    HTTPService.get(GET_NOTIFICATIONS_PATH)
    .then(function(response) {
      context.$store.dispatch('setMessageNotifications', response.data)
      context.$store.dispatch('setMessageNotificationsQuerying', false)
    })
    .catch(function(error) {
      console.log(error)
      context.$store.dispatch('setMessageNotificationsQuerying', false)
    })
  }
}
