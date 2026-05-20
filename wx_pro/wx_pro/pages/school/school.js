// pages/school/school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resData:[],
    date:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    /*wx.request({
      　　url: 'http://localhost:8080/nSel', //服务器地址
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
    　　});*/
    wx.cloud.callFunction({
      name: 'mysql',
      data: {},
      success: res => {
        console.log(res);
       
        for(let i=0;i<res.result.length;i++){
          let time = res.result[i].ntime;
          //console.log(time);
          var d = new Date(time);
          var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
          var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
          var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
          var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
          var sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
          var times = d.getFullYear() + '-' + month + '-' + (day-1) + ' ' + hours + ':' + min + ':' + sec;
          res.result[i].ntime=times;
          
         
        }
       
        console.log(res.result);
     
       
        that.setData({
         
          resData: res.result
          
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },

//跳页面穿参数
  toNews (event){
    console.log(event);
      let id = event.target.dataset.id-1;
      console.log(id);
      wx.navigateTo({
        url: '/pages/news/news?id=' + id
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