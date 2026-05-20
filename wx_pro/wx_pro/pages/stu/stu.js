// pages/stu/stu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let sid = options.sid;
    console.log(sid);
    var that=this;
    wx.cloud.callFunction({
      name: 'sql',
      data: {
        nid:sid
      },
      success: res => {
        //console.log('[云函数] [login] user openid: ', res.result.openid);
        console.log(res.result);
        that.setData({
          resData: res.result[0]
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  //跳页面穿参数
  toInfo(event) {
    
    let id = event.currentTarget.dataset.xid;
  
    wx.navigateTo({
      url: '/pages/myInfo/myInfo?id=' + id
    })

  },
  toTeach(event) {

    let id = event.currentTarget.dataset.xid;

    wx.navigateTo({
      url: '/pages/teachP/teachP?id=' + id
    })
  },
  toExam(event) {

    let id = event.currentTarget.dataset.xid;
console.log(id);
    wx.navigateTo({
      url: '/pages/exam/exam?id=' + id
    })
  },
  toCourse(event) {

    let classid = event.currentTarget.dataset.classid;
    let sid = event.currentTarget.dataset.sid;
    
    wx.navigateTo({
      url: '/pages/course/course?classid='+classid+'&sid='+sid
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