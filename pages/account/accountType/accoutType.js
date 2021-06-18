// pages/account/accountType/accoutType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    assetsItems: [
      {
        id: 1,
        text: '储蓄卡',
        code: 'savingsDepositCard'
      },
      {
        id: 2,
        text: '信用卡',
        code: 'creditCard'
      },
      {
        id: 3,
        text: '公积金',
        code: 'accumulationFund'
      },
      {
        id: 4,
        text: '储值卡',
        code: 'storedValueVard'
      },
      {
        id: 5,
        text: '在线支付',
        code: 'onlinePayment'
      },
      {
        id: 6,
        text: '现金',
        code: 'cash'
      }
    ],
    investmentItems: [
      {
        id: 6,
        text: '理财',
        code: 'manageMoneyMatters'
      },
      {
        id: 7,
        text: '其它',
        code: 'other'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 选择类型
  handleSelectType (e) {
    const { id, text } = e.currentTarget.dataset
    if (id == 3 || id == 6 || id == 7 || id == 8) {
      wx.navigateTo({
        url: `/pages/account/accountEdit/accountEdit?cardId=null&accountTypeId=${id}&accountType=${text}`,
      })
    } else {
      wx.navigateTo({
        url: `/pages/account/accountBank/accountBank?accountTypeId=${id}&accountType=${text}`,
      })
    }
  }

})