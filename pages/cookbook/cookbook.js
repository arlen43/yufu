// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchKey: '',
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
      },
      {
        id: 4,
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
    ]
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
})
