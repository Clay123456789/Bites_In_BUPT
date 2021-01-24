// pages/mine/minePage/minePage.js
const DB=wx.cloud.database().collection('userBasics')
Page({

  data: {
    list:[]
  },

  

  onLoad: function (options) {
    //获取用户openID并查询数据库信息
    this.getOpenid()
   
  },

  // 定义调用云函数获取openid
  getOpenid(){
    var openid
    let page = this;
    wx.cloud.callFunction({
      name:'getOpenid',
      complete:res=>{
         openid= res.result.openid
        //根据用户ID查询相关信息
        DB.where({
          _openid:openid
        }).get().then(res=>{
        this.setData({
          list:res.data
        })
        })
      }
    })
    
  },
  

  zhuye(){
    wx.navigateTo({
        url: `../myinfo/myinfo`,
      })
   },
   
   change(){
    wx.navigateTo({
        url: `../changinfo/changinfo`,
      })
   }


})

