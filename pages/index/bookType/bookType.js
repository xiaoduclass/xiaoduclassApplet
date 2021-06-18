// pages/index/bookType/bookType.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectAccountTypeId: 1,
    selectAccountTypeItem: [],
    accountTypeItems: [
      {
        id: 1,
        accountType: '流水账本',
        accountCode: 'accountStream'
      },
      {
        id: 2,
        accountType: 'AA账本',
        accountCode: 'accountAA'
      }
    ],
    accountStreamItems: [
      {
        id: 1,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '日常',
        accountChildCode: 'daily'
      },
      {
        id: 2,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '生意',
        accountChildCode: 'business'
      },
      {
        id: 3,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '家庭',
        accountChildCode: 'family'
      },
      {
        id: 4,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '旅行',
        accountChildCode: 'travel'
      },
      {
        id: 5,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '装修',
        accountChildCode: 'renovation'
      },
      {
        id: 6,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '结婚',
        accountChildCode: 'marry'
      },
      {
        id: 7,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '校园',
        accountChildCode: 'campus'
      },
      {
        id: 8,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '班费',
        accountChildCode: 'classFee'
      },
      {
        id: 9,
        accountTypeId: 1,
        accountType: '流水账本',
        accountChildType: '人情',
        accountChildCode: 'favor'
      },
    ],
    accountAAItems: [
      {
        id: 10,
        accountTypeId: 2,
        accountType: 'AA账本',
        accountChildType: '旅游',
        accountChildCode: 'travel'
      },
      {
        id: 11,
        accountTypeId: 2,
        accountType: 'AA账本',
        accountChildType: '室友',
        accountChildCode: 'roommate'
      },
      {
        id: 12,
        accountTypeId: 2,
        accountType: 'AA账本',
        accountChildType: '同事',
        accountChildCode: 'colleague'
      },
      {
        id: 13,
        accountTypeId: 2,
        accountType: 'AA账本',
        accountChildType: '球队',
        accountChildCode: 'team'
      },
      {
        id: 14,
        accountTypeId: 2,
        accountType: 'AA账本',
        accountChildType: '自驾',
        accountChildCode: 'drive'
      },
      {
        id: 15,
        accountTypeId: 2,
        accountType: 'AA账本',
        accountChildType: '户外',
        accountChildCode: 'outdoors'
      },
      {
        id: 16,
        accountTypeId: 2,
        accountType: 'AA账本',
        accountChildType: '活动',
        accountChildCode: 'activity'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleSelectItem (e) {
    const { id } = e.currentTarget.dataset
    this.setData({
      selectAccountTypeId: id
    })
    if (id == 1) {
      this.setData({
        selectAccountTypeItem: this.data.accountStreamItems,
        selectAccountTypeId: id
      })
    } else {
      this.setData({
        selectAccountTypeItem: this.data.accountAAItems,
        selectAccountTypeId: id
      })
    }
  },

  handleSelectChildItem (e) {

  }

})