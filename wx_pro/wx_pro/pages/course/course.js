// pages/course/course.js
let resDa=[];
let resDaa = [];
let resDaaa = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '6',
    as:'3',
    classes:'classes',
    resData:[],
    resDas:[],
    resDaas:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let classid = options.classid;
    let sid = options.sid;
    var that=this;
    wx.cloud.callFunction({
      name: 'kb',
      data: {
        classid: classid,
        sid: sid
      },
      success: res => {
        console.log(res);  
        that.setData({
          resData: res.result,
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
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