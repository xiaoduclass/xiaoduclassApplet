Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    bottomTabs: [
      {
        id: 1,
        name: '账户'
      },
      {
        id: 2,
        name: '账本'
      },
      {
        id: 3,
        name: '我的'
      }
    ],
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    accountBookName: '小杜同学',
    budgetValue: '0.00',
    accountBookItems: [
      {
        id: 1,
        date: '03月26日',
        week: '星期五',
        income: '2.00',
        expenditure: '5.00',
        list: [
          {
            accountBookId: 1,
            accountBookName: '零散',
            accountBookValue: '5.00',
            accountNookRemark: null
          },
          {
            accountBookId: 2,
            accountBookName: '超市',
            accountBookValue: '2.00',
            accountNookRemark: null
          },
          {
            accountBookId: 3,
            accountBookName: '购物',
            accountBookValue: '1.00',
            accountNookRemark: null
          },
          {
            accountBookId: 4,
            accountBookName: '吃喝',
            accountBookValue: '5.00',
            accountNookRemark: null
          }
        ]
      },
      {
        id: 2,
        date: '03月25日',
        week: '星期四',
        income: '2.00',
        expenditure: '5.00',
        list: [
          {
            accountBookId: 1,
            accountBookName: '零散',
            accountBookValue: '5.00',
            accountNookRemark: null
          },
          {
            accountBookId: 2,
            accountBookName: '超市',
            accountBookValue: '5.00',
            accountNookRemark: null
          },
          {
            accountBookId: 3,
            accountBookName: '购物',
            accountBookValue: '5.00',
            accountNookRemark: null
          },
          {
            accountBookId: 4,
            accountBookName: '吃喝',
            accountBookValue: '5.00',
            accountNookRemark: null
          }
        ]
      }
    ]
  },

  onLoad() {
    if (wx.getUserProfile) { 
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  getUserProfile (e) {
    // 推荐使用wx.getUserProfile获取用 户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  handleSelectItem (e) {
    const { id } = e.currentTarget.dataset
    console.log(id)
    wx.navigateTo({
      url: `/pages/index/bookView/bookView?id=${id}`,
    })
  },

  handleAccountBookType () {
    wx.navigateTo({
      url: `/pages/index/myBook/myBook`,
    })
  },

})
