var util = require('../../utils/util.js');
const app = getApp()
Page({
  data: {
    place: "",
    num: "3",
    items: [
      { name: '1', value: 'MQ'},
      { name: '2', value: 'JC' },
      { name: '3', value: 'RHN' },
      { name: '4', value: 'JSON' }
    ],
    userInfo: {},
    hasUserInfo: false,
    orderID: "",
    orderDate: "",
  },
  whereToPick: function (e) {
    this.setData({ place: e.detail.value })
    console.log(this.data.place)
  },
  bindNum: function(e) {
    //this.setData({ num: e.detail.value })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  makeOrder: function(e) {
    console.log(this.data.userInfo.nickName);
    var date = new Date();
    var orderID = util.orderID(date);
    var orderDate = util.orderDate(date);
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      orderID: orderID,
      orderDate: orderDate
    });
    console.log(this.data.orderID);
    console.log(this.data.orderDate);
    wx.request({
      url: 'http://www.test.com/addOrder.php?nickname=' + this.data.userInfo.nickName+'&num='+this.data.num+'&place='+this.data.place, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
      }

    })

  }




})
