//index.js
// var ss = require("/assets/script/util");

//获取应用实例
let app = getApp();
Page({
  data: {
    userInfo: {},
    location: '',
    toolbar: {
      location: '定位中...',
      searchKey: '饺子'
    },
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
  // 事件处理函数
  // 跳转事件开始

  onLoad: function () {
    // 调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      // 更新数据
      this.setData({
        userInfo:userInfo
      });
    });
    this.locationInit();
    this.searchKeyInit();
  },
  onReady: function () {

  },
  // ////////// 页面跳转开始 ////////////
  naviToRecommentPage: function() {
    wx.navigateTo({url: "./recommend/recommend"});
  },
  naviToCookDetail: function() {
    wx.navigateTo({url: "../cookbook/detail/detail"});
  },
  naviToCookPage: function() {
    wx.navigateTo({url: "../cookbook/cookbook"});
  },
  naviToShopPage: function() {
    wx.navigateTo({url: "../shop/shop"});
  },
  // ~~~~~~~~~~ 页面跳转结束 ~~~~~~~~~~~

  // ////////// 工具栏方法开始 ///////////
  locationInit: function() {
    app.getRegeo((data) => {
      if (data && data.length <= 0) {
        wx.showModal({
          title: '提示',
          content: '获取定位失败，请手动定位'
        });
      }
      this.setData({"toolbar.location": data[0].name});
    });
  },
  searchKeyInit: function() {
    this.setData({"toolbar.searchKey": '初始化搜索'});
    wx.setStorageSync('searchKey', '初始化搜索');
  },
  openScaner: function() {
    wx.scanCode({
      success: (res) => {
        wx.showModal({
          title: '提示',
          content: JSON.stringify(res)
        });
      },
      fail: (res) => {
        wx.showModal({
          title: '提示',
          content: JSON.stringify(res)
        })
      }
    })
  },
  chooseLocation: function() {
    // wx.navigateTo({url: "../map/map"});
    wx.chooseLocation({
      success: (res) => {
        if (res && res.name) {
          this.setData({"toolbar.location": res.name});
        }
      },
      fail: (msg) => {
        wx.showModal({
          title: '鱼小宝提醒您',
          content: '请选择位置并点击确定以完成定位',
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
  naviToSearchPage: function() {
    wx.navigateTo({url: "../search/search"});
  },
  // ~~~~~~~~~~~~ 工具栏方法结束 ~~~~~~~~~~~
});
