//index.js
var amapFile = require('../../lib/amap-sdk/amap-wx.js');//如：..­/..­/libs/amap-wx.js

//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    location: '定位中'
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
    // wx.navigateTo({url: "../map/map"});
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
        wx.showModal({
          title: '提示',
          content: JSON.stringify(res),
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    });
  },
  // toolbar
  openScaner: function() {
    wx.scanCode({
      success: (res) => {
        wx.showModal({
          title: '提示',
          content: JSON.stringify(res)
        })
      },
      fail: (res) => {
        wx.showModal({
          title: '提示',
          content: JSON.stringify(res)
        })
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
  },
  onReady: function () {
    var myAmapFun = new amapFile.AMapWX({key:'89007d7ada7f4a257ab3c1453a52c025'});
    myAmapFun.getRegeo({
      success: function(data){
        console.log(data);
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })
    // wx.getLocation({
    //   type: 'gcj02',
    //   success: function(res) {
    //     // wx.showModal({
    //     //   title: '提示',
    //     //   content: JSON.stringify(res)
    //     // });
    //     let latitude = res.latitude
    //     let longitude = res.longitude
    //     wx.openLocation({
    //       latitude: latitude,
    //       longitude: longitude,
    //       scale: 28
    //     });
    //     this.setData('location', res.name);
    //   }
    // })
  },
})
