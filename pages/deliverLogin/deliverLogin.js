Page({
  data: {
    password: ''
  },

  bindPasswordInput: function (e) {
    this.setData({ password: e.detail.value })
    //console.log(this.data.password)
  },

  login: function (e) {
    console.log("test")
    if (this.data.password == "1234") {
      wx.navigateTo({
        url: '../../pages/deliver/deliver',
      })
    } else {
      wx.showModal({
        title: '登录失败', content: '请检查您填写的用户信息！', showCancel: false
      })
    }
  }
})