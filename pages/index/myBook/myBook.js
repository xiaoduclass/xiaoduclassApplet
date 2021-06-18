// pages/index/myBook/myBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountBookItems: [
      {
        id: 1,
        accountBook: '吃',
        accountBookCode: 'code',
        accountBookTypeId: 11,
        accountBookType: '生意账本',
        accountBookCount: 45
      },
      {
        id: 2,
        accountBook: '日常',
        accountBookCode: 'code',
        accountBookTypeId: 1,
        accountBookType: '日常账本',
        accountBookCount: 43
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleBackHome () {
    wx.switchTab({
      url: `/pages/index/index`,
    })
  },

  handleSelectItem (e) {
    console.log(e.target.dataset.id)
  }

})