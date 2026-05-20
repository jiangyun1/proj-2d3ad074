let stuid=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: "",
    selectall: {},
    aa: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     stuid=options.id;
    console.log(stuid);
    wx.cloud.callFunction({
      // 云函数名称
      name: 'examone',
      data:{
        stuid: stuid
      },
      success: (res) => {
        this.setData({
          select: res.result[0],
        })
        console.log(res.result);
        var semtimes;
        var date = this.data.select.entertime;
        var d = new Date(date);
        var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
        var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
        var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
        var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        var sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        var semtimes;
        var year = d.getFullYear();
        var month = 1;
        var monthtwo = 2;
        var json = [];
        for (var i = 0; i < 4; i++) {
          var twoyear = year
          if (i >= 1) {
            twoyear = year + i;
          }
          if (month = 1) {
            semtimes = '第一学期';
            json.push(twoyear + '-' + (twoyear + 1) + semtimes)

          }
          if (monthtwo = 2) {
            semtimes = '第二学期';
            json.push(twoyear + '-' + (twoyear + 1) + semtimes)
          }
        }
        this.setData({
          aa: json
        })
      },
      fail: console.error
    })

  },
  search(e) {
    var name = e.currentTarget.dataset.name + 1
    console.log(name)
    wx.cloud.callFunction({
      // 云函数名称
      name: 'examtwo',
      data: {
        datetimes: name,
        stuid: stuid
      },
      success: (res) => {
        console.log(res)
        this.setData({
          selectall: res.result,
        })
      },
      fail: console.error
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