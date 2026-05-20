//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  //跳页面绑定事件
  bindXuan:function(){
    wx.navigateTo({
      url: '../xuan/xuan',
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
