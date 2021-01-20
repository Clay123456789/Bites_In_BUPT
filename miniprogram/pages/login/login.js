const db = wx.cloud.database().collection("userBasics")
Page({
  data: {
    openid:"",
   //判断小程序的API，回调，参数，组件等是否在当前版本可用。
   canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    //获取用户openID
    this.getOpenid()
    // 查看是否授权
   wx.getSetting({
    success: function (res) {
     if (res.authSetting['scope.userInfo']) {
      wx.getUserInfo({
       success: function (res) {
        //用户已经授权过
        //跳转到主页
        wx.switchTab({
         url: '../homePage/homePage'
        })
       }
      });
     }
    }
   })
  },

  // 定义调用云函数获取openid
  getOpenid(){
    //获取id
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
    
  },
  
  bindGetUserInfo: function (e) {
   if (e.detail.userInfo) {
    //用户按了允许授权按钮
    //判断该用户信息是否已在数据库中
    db.where({
      _openid:this.data.openid
    }).get({
      success:res => {
        if(res.data.length > 0){//数据库中已有数据
        //跳转到主页
        wx.switchTab({
          url: '../homePage/homePage'
         })
        }else{
        //跳转到用户注册界面
        wx.navigateTo({
          url: '../signUp/signUp',
        })
        }
      },
      fail:res => {
        console("查询失败",err)
      }
    })
   } else {
    //用户按了拒绝按钮
    wx.showModal({
     title:'警告',
     content:'您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
     showCancel:false,
     confirmText:'返回授权',
     success:function(res){
      if (res.confirm) {
       console.log('用户点击了“返回授权”')
      } 
     }
    })
   }
  }

 })