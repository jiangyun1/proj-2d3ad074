// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsData:[],
    isCollected: false,
    date:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let uid=options.id;
    this.setData({
     
      uid
    });
    // 读取本地收藏的状态数据，根据收藏的状态更新显示
    let collectedObj = wx.getStorageSync('isCollected');
    if (collectedObj[uid]) { // 之前为收藏状态
      this.setData({
        isCollected: true
      })
    }
    wx.cloud.callFunction({
      name: 'mysql',
      data: {},
      success: res => {
        //console.log('[云函数] [login] user openid: ', res.result.openid);
        //console.log("news"+res.result[0]);
        let time=res.result[uid].ntime;
        
        var d = new Date(time);
        var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        var sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var times = d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + sec;
        this.setData({
          date:times,
          newsData: res.result[uid]
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  // 处理收藏的功能函数
  handleCollection() {
    let isCollected = !this.data.isCollected;
    //console.log(this.data.isCollected);
    // 更新是否收藏的状态
    this.setData({
      isCollected
    })
    // 显示提示功能
    let title = isCollected ? '收藏成功' : '取消收藏';
    wx.showToast({
      title,
    })

    // 将是否收藏的状态存储到本地
    // 1. 获取之前的收藏状态
    let oldCollectedObj = wx.getStorageSync('isCollected');
    // 2. 预处理从未收藏过的状态，获取的本地数据为空串
    oldCollectedObj = oldCollectedObj ? oldCollectedObj : {};
    // 3. 将当前页面收的状态存入对象中
    let index = this.data.uid;
    oldCollectedObj[index] = isCollected;
    wx.setStorage({
      key: 'isCollected',
      data: oldCollectedObj,
    })

  },
  
  // 点击分享按钮
  handleShare() {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到qq空间', '分享到微信好友'],
      itemColor: '#666'
    })
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