// pages/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sno:"",
    resData:[],
    show: false,
    date:''
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  /**
         * 转换时间格式
         */

  onLoad: function (options) {
    var that=this;
    console.log(options.id); 
    let nid=options.id; 
    wx.cloud.callFunction({
      name: 'sql',
      data: {
        nid
      },
      success: (res) => {
        //console.log('[云函数] [login] user openid: ', res.result.openid);
        //console.log(res);
        let sbirsday = res.result[0].sbirthday
        
        var d = new Date(sbirsday);
        var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        var sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var times = d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + sec;
        console.log(times);
        that.setData({
          date:times,
          resData: res.result[0]
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