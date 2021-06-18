Page({

  /**
   * 页面的初始数据
   */
  data: {
    assetStatus: false,
    netAssets: '0.00',
    totalAssets: '0.00',
    liabilities: '0.00',
    accountItems: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.selectAccountItems()
  },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.selectAccountItems()
  },

  handleCourseTap () {
    this.assetStatus = !this.assetStatus
    this.setData({
      assetStatus: this.assetStatus
    })
  },

  // 添加账户
  handleAddAccount () {
    wx.navigateTo({
      url: '/pages/account/accountType/accoutType'
    })
  },

  selectAccountItems () {
    wx.request({
      url: getApp().globalData.url  + '/account/account/list',
      method: 'post',
      data: JSON.stringify({}),
      header: {
        'Authorization': wx.getStorageSync('token')
      },
      success: (res) => {
        this.setData({
          accountItems: res.data.rows
        })
      }
    })
  }

})