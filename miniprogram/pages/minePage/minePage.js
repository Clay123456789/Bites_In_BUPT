// pages/minePage/minePage.js
const db = wx.cloud.database().collection("userBasics")
Page({

  data: {
    openid:""
  },

  onLoad: function (options) {
    //获取用户openID
    this.getOpenid()
  },

  // 定义调用云函数获取openid
  getOpenid(){
    let page = this;
    wx.cloud.callFunction({
      name:'getOpenid',
      complete:res=>{
        console.log('openid--',res.result)
        var openid = res.result.openid
        page.setData({
          openid:openid
        })
      }
    })
    //根据用户ID查询相关信息
    this.getUser()
  },
  
  //根据用户ID查询相关信息
  getUser(){
    db.where({
      "_openid":this.data.openid
    }).get({
      success:res => {
        console.log("该用户已注册",res.data)
      }
    })
  }




})