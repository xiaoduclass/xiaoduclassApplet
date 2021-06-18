Page({

  /**
   * 页面的初始数据
   */
  data: {
    deleteDialogShow: false,
    buttons: [{text: '取消'}, {text: '确定'}],
    model: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      model: options
    })
  },

  handleEditItem () {
    wx.navigateTo({
      url: `/pages/index/bookAdd/bookAdd?id=${this.data.model.id}`
    })
  },

  handleOpenDelete () {
    this.setData({
      deleteDialogShow: true
    })
  },

  tapDialogButton(e) {
    if (e.detail.index == 1) {
      // 调用删除方法（未开发）
      // 返回页面
      wx.navigateBack({
        delta: 1
      })
    }
    this.setData({
      deleteDialogShow: false
    })
  }

})