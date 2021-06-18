// pages/book/bookAdd/bookAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountBookTypeItems: [
      {
        id: 1,
        accountBookType: '超市',
        accountBookCode: 'chaoshi'
      },
      {
        id: 2,
        accountBookType: '商场',
        accountBookCode: 'shangchang'
      },
      {
        id: 3,
        accountBookType: '吃喝',
        accountBookCode: 'chihe'
      },
      {
        id: 4,
        accountBookType: '电子产品',
        accountBookCode: 'dianzichanpin'
      },
      {
        id: 5,
        accountBookType: '红包',
        accountBookCode: 'hongbao'
      },
      {
        id: 6,
        accountBookType: '零食',
        accountBookCode: 'lingshi'
      },
    ],
    model: {
      id: 0,
      accountValue: 0,
      accountTypeId: 1,
      accountType: '超市',
      remark: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      // 根据ID查询数据(未实现)
      const model = {
        id: 1,
        accountTypeId: 1,
        accountType: '超市',
        accountValue: '5.00',
        actionType: 1,
        remark: '酸奶，香肠'
      }
      this.setData({
        model: model
      })
    }
  }

})