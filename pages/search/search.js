// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey: '输入内容搜索',
    hideSearchCategory: false,
    hideRealTime: true,
    hideSearchResult: true,
    foodList: [
      {
        id: 1,
        food: {
          img: '/assets/images/food.jpg',
          name: '白菜猪肉馅饺子',
          description: '白菜猪肉馅饺子味鲜，耐吃，配上秘制酱汁'
        },
        author: {
          img: '/assets/images/chef.jpg',
          name: '北方厨房'
        },
        comment: {
          score: 3.5,
          count: 1024
        }
      },
      {
        id: 2,
        food: {
          img: '/assets/images/food2.jpg',
          name: '蒜泥白肉',
          description: '四川著名蒜泥白肉，肉质鲜嫩'
        },
        author: {
          img: '/assets/images/chef2.jpg',
          name: '四川人'
        },
        comment: {
          score: 3.5,
          count: 2047
        }
      },
      {
        id: 3,
        food: {
          img: '/assets/images/food.jpg',
          name: '蒜泥白肉',
          description: '四川著名蒜泥白肉，肉质鲜嫩'
        },
        author: {
          img: '/assets/images/chef.jpg',
          name: '四川人'
        },
        comment: {
          score: 3.5,
          count: 2033
        }
      }
    ],
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
    ],
    dietitianList: [
      {
        id: 1,
        dietitian: {
          name: '天天向上',
          description: '擅长哺乳期营养调节，让您保持身材的同时',
          img: '/assets/images/chef.jpg'
        },
        comment: {
          score: 3.5,
          count: 2042
        }
      },
      {
        id: 1,
        dietitian: {
          name: '过百不是梦',
          description: '擅长对体型较瘦的朋友调节饮食，根据你您的体质定制您能吸收的',
          img: '/assets/images/chef.jpg'
        },
        comment: {
          score: 3.5,
          count: 9999
        }
      },
      {
        id: 1,
        dietitian: {
          name: '天天向上',
          description: '擅长哺乳期营养调节，让您保持身材的同时',
          img: '/assets/images/chef.jpg'
        },
        comment: {
          score: 3.5,
          count: 2042
        }
      }
    ]
  },

  // ////////// 绑定事件 //////////
  catchCancleBtn: function() {
    wx.navigateBack({
      delta: 1
    });
  },

  clearSearchInput: function() {
    this.setData({searchKey: ''});
    // 搜索指定内容展示
    this.setData({hideSearchCategory: false});
    // 实时搜索key隐藏
    this.setData({hideRealTime: true});
    // 搜索结果隐藏
    this.setData({hideSearchResult: true});
  },
  bindSearchInput: function(e) {
    // 搜索指定内容隐藏
    this.setData({hideSearchCategory: true});
    // 实时搜索key展示
    this.setData({hideRealTime: false});
    // 搜索结果展示
    // this.setData({hideSearchResult: false});
  },
  handleSearch: function() {
    if (this.data.searchKey.length <= 0 || this.data.searchKey.trim().length <= 0) {
      return;
    }
    // 请求数据

    // 搜索指定内容隐藏
    this.setData({hideSearchCategory: true});
    // 实时搜索key隐藏
    this.setData({hideRealTime: true});
    // 搜索结果展示
    this.setData({hideSearchResult: false});
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
