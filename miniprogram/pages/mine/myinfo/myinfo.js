const DB=wx.cloud.database().collection('userBasics')
Page({
    data:{
        imgUrls: [
            {
              id: 0,
              url: '/images/banner.jpg'
            }, {
              id: 1,
              url: '/images/banner5.jpg'
            }
          ],
          indicatorDots: true,
          autoplay: true,
          indicatorColor: '#CCCCCC',
          interval: 2000,
          duration: 400,
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
      
    }
  })
