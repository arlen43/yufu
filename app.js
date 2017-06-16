//app.js
App({
  onLaunch: function () {
    // 监听小程序初始化，可传入参数scene，以便营销统计
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },
  onShow: function() {
    // 监听小程序显示，小程序启动或从后台进入前台，可传入参数scene，以便营销统计
  },
  onHide: function() {
    // 监听小程序隐藏
  },
  onError: function() {
    // 错误监听，小程序发生脚本错误，或api调用失败
  },
  // 全局方法，在本文件通过this访问，在其他文件通过getApp访问
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  requestData: function() {
    if (wx.openBluetoothAdapter) {
      wx.openBluetoothAdapter()
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  // 全局数据
  globalData:{
    userInfo:null
  }
})