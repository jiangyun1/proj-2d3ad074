// pages/login/login.js
const app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
  users:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  formSubmit:function(user){
    let id = user.detail.value.userName;
    console.log(id);
    this.setData({
      users:user.detail.value
    });
    if (user.detail.value.userName == '' || user.detail.value.userPassword == '') {
      wx.showToast({
        title: '请写您的账号和密码',
        icon: 'loading',
        duration: 2000
      })}else{
    wx.cloud.callFunction({
      // 云函数名称
      name: 'ysql',
      data:{
        usersd: user.detail.value.userName,
        pass: user.detail.value.userPassword
      },
      
      success: (res) => {
        console.log(res);     
       if(res.result[0].num==1){
         wx.showToast({
           title: '成功',
           icon: 'success',
           duration: 2000
         })
         wx.reLaunch({
           url: '/pages/stu/stu?sid=' + id
         })
       
       }else{
         wx.showToast({
           title: '学号或密码错误',
           icon: 'loading',
           duration: 2000
         })
       }
      },
      fail: console.error
      })
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