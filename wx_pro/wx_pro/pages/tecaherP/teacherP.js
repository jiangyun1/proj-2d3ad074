// pages/tecaherP/teacherP.js
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';

let ra=0;
let ra1 = 0;
let ra2 = 0;
let ra3 = 0;
let ra4 = 0;
let diss = 'disabled';
let num=1;
let num1 = 1;
let num2= 1;
let num3 = 1;
let num4 = 1;
let stuid=0;
let tchid = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      radio:100,
      radio1: 100,
      radio2: 100,
      radio3: 100,
      radio4: 100,
     dis:'disabled'
      //grade:'0'
  },
 
  tj(event){
    console.log(event);
    let add=event.currentTarget.dataset.add;
    Dialog.confirm({
      title: '你的分数:'+add,
      message: '确认要提交吗？'
    }).then(() => {
      // 成功提交
      wx.cloud.callFunction({
        name: 'tecah',
        data: {
          stuid: stuid,
          tchid: tchid,
          add:add
        },
        success: res => {
          console.log(add+tchid);
              wx.cloud.callFunction({
                name: 'tjTch',
                data: {
                  add: add,
                  tchid: tchid
                },
                success: res => {
                  //console.log('[云函数] [login] user openid: ', res.result.openid);
                  console.log(res.result);
                  wx.showToast({
                    title: '提交成功！', // 标题
                    icon: 'success',  // 图标类型，默认success
                    duration: 1500  // 提示窗停留时间，默认1500ms
                  }, wx.navigateBack({

                    delta: 1

                  })
                  )
                },
                fail: err => {
                  console.error('[云函数] [login] 调用失败', err)
                }
            })         
          console.log(res.result);
       
          

          
        },
        fail: err => {
          console.error('[云函数] [login] 调用失败', err)
        }
      })
      
    }).catch(() => {
      // on cancel
      
      
    });
    },
  
  cz:function(){
    diss ='disabled';
    num = 1;
     num1 = 1;
     num2 = 1;
     num3 = 1;
     num4 = 1;
    this.setData({
      radio: 100,
      radio1: 100,
      radio2: 100,
      radio3: 100,
      radio4: 100,
      dis:'disabled',
  
    })
  },
  onChange(event) {
    
    this.setData({
      radio: event.detail,
     
    });
  },
  onClick(event) {
    
    
    const { name } = event.currentTarget.dataset;
    let names=parseInt(name);
    if(num==1){
      diss = diss.substr(0, diss.length - 1)
    }
    num++;
    this.setData({
      radio: name,
      ra:names,
      dis:diss
      
    });
  },
  onClick1(event) {    
    const { name } = event.currentTarget.dataset;   
    let names = parseInt(name);
    if (num1 == 1) {
    diss = diss.substr(0, diss.length - 2)
    }
    num1++;
    this.setData({
      radio1: name,
      ra1: names,
      dis: diss
    });
  },
  onClick2(event) {
    const { name } = event.currentTarget.dataset;
    let names = parseInt(name);
    if (num2 == 1) {
      diss = diss.substr(0, diss.length - 2)
    }
    num2++;
    this.setData({
      radio2: name,
      ra2: names,
      dis: diss
    });
  },
  onClick3(event) {
    const { name } = event.currentTarget.dataset;
    let names = parseInt(name);
    if (num3 == 1) {
      diss = diss.substr(0, diss.length - 2)
    }
    num3++;
    this.setData({
      radio3: name,
      ra3: names,
      dis: diss
    });
  },
  onClick4(event) {
    const { name } = event.currentTarget.dataset;
    let names = parseInt(name);
    if (num4 == 1) {
      diss = diss.substr(0, diss.length - 1)
    }
    num4++;
    this.setData({
      radio4: name,
      ra4: names,
      
      dis: diss
    });
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     stuid = options.stuid;
     tchid = options.tchid;
    console.log(stuid);
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