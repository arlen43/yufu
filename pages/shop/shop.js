// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey: '',
    shopList: [
      {
        id: 1,
        shop: {
          img: '/assets/images/food.jpg',
          name: '黄记焖锅',
          description: '百年老店黄记焖锅，舌尖上的中国'
        },
        comment: {
          score: 3.5,
          count: 2212
        }
      },
      {
        id: 2,
        shop: {
          img: '/assets/images/food2.jpg',
          name: '黄记焖锅',
          description: '百年老店黄记焖锅，舌尖上的中国'
        },
        comment: {
          score: 3.5,
          count: 1
        }
      },
      {
        id: 3,
        shop: {
          img: '/assets/images/food.jpg',
          name: '黄记焖锅',
          description: '百年老店黄记焖锅，舌尖上的中国'
        },
        comment: {
          score: 3.5,
          count: 33
        }
      },
      {
        id: 4,
        shop: {
          img: '/assets/images/food2.jpg',
          name: '黄记焖锅',
          description: '百年老店黄记焖锅，舌尖上的中国'
        },
        comment: {
          score: 3.5,
          count: 1
        }
      }
    ]
  },

  naviToShopDetail: function() {
    wx.navigateTo({url: "./detail/detail"});
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let searchKey = wx.getStorageSync('searchKey') || '输入内容搜索';
    if (searchKey && searchKey.length !== 0 && searchKey.trim().length !== 0) {
      this.setData({searchKey: searchKey});
    }
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
});
