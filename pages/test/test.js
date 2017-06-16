// pages/test/index.js
var app = getApp();
Page({

  changeText: function() {
    this.setData({ recommend: "呼呼呼呼呼呼呼" });
  },
  /**
   * 页面的初始数据
   */
  data: {
    recommend: '哈哈哈'
  },

  /**
   * 生命周期函数--监听页面加载
   * 一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数
   */
  onLoad: function (options) {
    let ss = 22;
    console.log(ss);
    this.setData({ recommend: "啦啦啦啦啦啦"});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示，每次打开页面都会调用一次。
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏，当navigateTo或底部tab切换时调用。
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载，当redirectTo或navigateBack的时候调用。
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作，需要在config的window选项中开启enablePullDownRefresh
   * 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   * 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
   * 用户点击转发按钮的时候会调用
   * 此事件需要 return 一个 Object，用于自定义转发内容
   */
  onShareAppMessage: function () {
    return {
      title: '逛吃逛吃',
      path: '../test/test'
    }
  }
})