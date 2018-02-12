require 'test_helper'

class MessageNotificationControllerTest < ActionDispatch::IntegrationTest
  test "should get get" do
    get message_notification_get_url
    assert_response :success
  end

end
