// pages/shop/detail/detail.js
var wxQuery = require('../../../assets/script/wxquery.js');
var $ = wxQuery.$;

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexArr: [{name: '先生', value: 'female', checked: true},{name: '女士', value: 'male'}],
    deskArr: ['六人桌（余10）', '四人桌（余1）', '两人桌（余0）'],
    tabs: {
      order: {
        activeClass: 'tab-active',
        hidden: false,
      },
      booking: {
        activeClass: '',
        hidden: true,
      },
      comment: {
        activeClass: '',
        hidden: true,
      },
      shop: {
        activeClass: '',
        hidden: true,
      },
    }
  },

  handleTabbarTap: function(event) {
    console.log(event);
    console.log(this.$refs);
    let currTab = event.target.dataset.name;

    let tempTabs = {};
    Object.assign(tempTabs, this.data.tabs);
    app.util.setPropertyAll(tempTabs, 'hidden', true);
    app.util.setPropertyAll(tempTabs, 'activeClass', '');

    tempTabs[currTab].activeClass = 'tab-active';
    tempTabs[currTab].hidden = false;
    //this.setData(this.data.tabs[currTab].activeClass, 'tab-active');
    this.setData({tabs: tempTabs});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload");
    console.log(this);

    wxQuery.register(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
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
   */
  onShareAppMessage: function () {
  
  }
})
