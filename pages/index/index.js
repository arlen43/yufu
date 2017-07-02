//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  // 跳转事件开始
  goSearchCategory: function() {
    wx.navigateTo({url: "../search/search"});
  },
  goCookDetail: function() {
    wx.navigateTo({url: "../cookbook/detail/detail"});
  },
  goLocation: function() {
    console.log("go location");
  },
  // toolbar
  openScaner: function() {
    wx.scanCode({
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goTest: function() {
    wx.switchTab({
      url: '../test/test',

    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
