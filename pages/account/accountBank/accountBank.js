// pages/account/accountBank/accountBank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountTypeId: null,
    accountType: null,
    selectItems: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { accountTypeId, accountType } = options;
    this.setData({
      accountTypeId,
      accountType
    })
    var dictType = '';
    if (accountTypeId == 1) {
      dictType = 'account_type_bank_card';
    } else if (accountTypeId == 2) {
      dictType = 'account_type_credit_card';
    } else if (accountTypeId == 4) {
      dictType = 'account_type_stored_card';
    } else if (accountTypeId == 5) {
      dictType = 'account_type_online_payment';
    }
    wx.request({
      url: getApp().globalData.url  + '/system/dict/data/type/' + dictType,
      method: 'get',
      header: {
        'Authorization': wx.getStorageSync('token')
      },
      success: (res) => {
        this.setData({
          selectItems: res.data.data
        })
      }
    })
  },

    // 选择类型
    handleSelectCard (e) {
      const { accountCardId, accountCard, accountCardCode } = e.currentTarget.dataset
      const { accountTypeId, accountType } = this.data;
      wx.navigateTo({
        url: `/pages/account/accountEdit/accountEdit?accountCardId=${accountCardId}&accountCard=${accountCard}&accountCardCode=${accountCardCode}&accountTypeId=${accountTypeId}&accountType=${accountType}`,
      })
    }

})