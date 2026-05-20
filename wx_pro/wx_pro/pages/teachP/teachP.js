// pages/teachP/teachP.js
let stuid = 0;
let tec=0;

Page({

  /**
   * 页面的初始数据
   */

  data: {
    show:false
  },
  

  onClose() {
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let id=options.id;
   
     stuid = options.id;
    var that=this;
    wx.cloud.callFunction({
      name: 'xk',
      data: {
        nid:id
      },
      success: res => {
        //console.log('[云函数] [login] user openid: ', res.result.openid);
        
        //console.log(tec);
        console.log(res.result);

        that.setData({
          resData: res.result
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    });
  console.log(stuid);
    
  },

  toTp(event){
    let tchid = event.currentTarget.dataset.id;
    //console.log("tp"+stuid);
    wx.cloud.callFunction({
      name: 'tecahs',
      data: {
        stuid: stuid,
        tec: tchid
      },
      success: res => {
        //console.log(res.result);
        if (res.result.length>0){
          this.setData({ show: true });
        }else{
        wx.navigateTo({
          url: '/pages/tecaherP/teacherP?stuid=' + stuid + '&tchid=' + tchid,
        })
        }
        //console.log('[云函数] [login] user openid: ', res.result.openid);
       
        
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