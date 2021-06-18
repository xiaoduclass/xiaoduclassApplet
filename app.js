// app.js
App({

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //存储token
    wx.setStorage({
      key:"token",
      data:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImRlNzk0NDZmLWNjZTEtNDU5Zi04Njk1LWFhZjliZTdmNzM1OSJ9.ECEIQ8M0o9tIl91mwZ35nyLjKYBNQIefuqUfVtHBaisqCyuNFK6YqTlI2Ga-9hS7J063pzFUCKzBPXt_y7Hj7w"
    })



    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
      }
    })

  },
  globalData: {
    userInfo: null,
    url: 'https://www.xiaoduclass.top/api'
  }
})
