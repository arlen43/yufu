var amapFile = require('../../lib/amap-sdk/amap-wx.js');//如：..­/..­/libs/amap-wx.js
Page({
  // onReady: function (e) {
  //   // 使用 wx.createMapContext 获取 map 上下文
  //   this.mapCtx = wx.createMapContext('myMap')
  // },
  // getCenterLocation: function () {
  //   this.mapCtx.getCenterLocation({
  //     success: function(res){
  //       console.log(res);
  //       console.log(res.longitude)
  //       console.log(res.latitude)

  //       wx.getLocation({
  //         type: 'gcj02',
  //         success: function(res) {
  //           var latitude = res.latitude
  //           var longitude = res.longitude
  //           var speed = res.speed
  //           var accuracy = res.accuracy
  //         }
  //       })
  //     }
  //   })
  // },
  // moveToLocation: function () {
  //   this.mapCtx.moveToLocation()
  // },
  // translateMarker: function() {
  //   this.mapCtx.translateMarker({
  //     markerId: 0,
  //     autoRotate: true,
  //     duration: 1000,
  //     destination: {
  //       latitude:23.10229,
  //       longitude:113.3345211,
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // },
  // includePoints: function() {
  //   this.mapCtx.includePoints({
  //     padding: [10],
  //     points: [{
  //       latitude:23.10229,
  //       longitude:113.3345211,
  //     }, {
  //       latitude:23.00229,
  //       longitude:113.3345211,
  //     }]
  //   })
  // }

  onLoad: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'89007d7ada7f4a257ab3c1453a52c025'});
    myAmapFun.getPoiAround({
      success: function(data){
        //成功回调
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })
  },

})
