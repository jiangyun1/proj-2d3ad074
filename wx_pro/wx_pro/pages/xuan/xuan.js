// pages/xuan/xuan.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    texts:'轩轩',
    text:'轩',
    x: 0,
    y: 0,
    show:true,
    news:["aaa","bbb","ccc"],
    resData:[]
  },
  gogogo:function(){
    // 调用云函数
    wx.cloud.callFunction({
      name: 'mysql',
      data: {},
      success: res => {
        //console.log('[云函数] [login] user openid: ', res.result.openid);
        console.log(res.result);
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
    },
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
  },
  //点击事件
  btnClick:function(){
    console.log("按钮被点击了");
    var isShow = this.data.show;
    console.log(isShow);
    var newsData=this.data.news;
    //删除数组第一个数据
    newsData.shift();
    //定义或者修改参数的值
    this.setData({
      
     text:"按钮点击过后",
     show:!isShow,
    news:newsData
    })

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    /*wx.request({
      url: 'http://localhost:8080/sel', //服务器地址
      data: {
        //请求参数
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        
        that.setData({
          resData: res.data
        })
        
      }
    })*/
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