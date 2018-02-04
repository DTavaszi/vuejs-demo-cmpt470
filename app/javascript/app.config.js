export const API_ENDPOINT = "http://localhost:3000"

export const getHeader = function() {
  const tokenData = JSON.parse(window.localStorage.getItem('lbUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer' + tokenData.access_token
  }

  return headers
}
