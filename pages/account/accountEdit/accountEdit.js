Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountCardId: null,
    accountCard: null,
    accountCardCode: null,
    accountTypeId: null,
    accountType: null,
    accountName: null,
    accountBalance: null,
    accountCardNumber: null,
    accountQuota: null,
    accountAccounts: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { accountCardId, accountCard, accountCardCode, accountTypeId, accountType } = options;
    console.log(options)
    this.setData({
      accountCardId: accountCardId,
      accountCard: accountCard,
      accountCardCode: accountCardCode,
      accountTypeId: accountTypeId,
      accountType: accountType,
      accountName: accountCard
    })
  },

  /**
   * 完成
   */
  handleSaveAccount () {
    wx.request({
      url: getApp().globalData.url  + '/account/account/add',
      method: 'post',
      data: JSON.stringify(this.data),
      header: {
        'Authorization': wx.getStorageSync('token')
      },
      success: (res) => {
        wx.switchTab({
          url: '/pages/account/account'
        })
      }
    })
  }

})