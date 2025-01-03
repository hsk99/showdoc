import request from '@/request.js'

const getUserInfo = (callback = () => {}) => {
  return request('/api/user/info', {}, 'post', false).then(data => {
    if (callback) {
      callback(data)
    }
  })
}

const getUserInfoFromStorage = () => {
  const userinfostr = localStorage.getItem('userinfo')
  if (userinfostr) {
    const userinfo = JSON.parse(userinfostr)
    if (userinfo && userinfo.user_token) {
      return userinfo
    }
  }
  return false
}

export { getUserInfo, getUserInfoFromStorage }
