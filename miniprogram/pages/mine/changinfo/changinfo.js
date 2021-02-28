const DB=wx.cloud.database().collection("userBasics")
Page({
  data: {
    selectArray1: [
      {
      "value": "2020"
      },{
        "value": "2019"
      }, {
        "value": "2018"
      },{
        "value": "2017"
      }],
    selectArray2: [
      {
      "value": "信通"
      },{
        "value": "计算机(示软)"
      }, {
        "value": "国院"
      },{
        "value": "电子"
      },{
        "value": "人文"
      },{
        "value": "其他"
      }],
    name:"",
    signnature:"",
    grade:"",
    major:"",
    img:"",
    id:""
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
          page.setData({
          id:res.data[0]._id,
          img:res.data[0].img,
          name:res.data[0].name,
          major:res.data[0].major,
          grade:res.data[0].grade,
          signature:res.data[0].signature
        })
        console.log(res)
        })
      }
    })    
  },

  select1: function(e) {
    let that = this
      console.log(e.detail)
      that.setData({
        grade:e.detail.value
      })
  },

 select2: function(e) {
    let that = this
    console.log(e.detail)
    that.setData({
      major:e.detail.value
    })
  },
  
  updname:function(e){
    console.log(e.detail.value);//打印输入的值
    this.setData({
    name: e.detail.value  
   })
 },

  updsignature:function(e){
    console.log(e.detail.value);//打印输入的值
    this.setData({
      signature: e.detail.value  
    })
  },

//修改头像
headimage: function () {
  var  that = this;
   wx.chooseImage({
     count: 1, // 默认9     
     sizeType: ['original', 'compressed'],
    // 指定是原图还是压缩图，默认两个都有     
     sourceType: ['album', 'camera'],
    // 指定来源是相册还是相机，默认两个都有   
     success: function (res) {   
       that.setData({
       img: res.tempFilePaths  
      })
    }
  })
},
  
//修改个人信息
save(){
  var {grade, major, img, name, signature} = this.data
    DB.doc(this.data.id).update({
     data:{
        "img":img,
        "grade":grade,
        "major":major,
        "name":name,
        "signature":signature
     },
    success(res){
      console.log("更新成功",res)
      wx.switchTab({
        url: `../minePage/minePage`
      })
    },
    fail(res){
      console.log("更新失败",res)
    }
    })
 }
})