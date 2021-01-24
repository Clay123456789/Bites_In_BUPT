const DB=wx.cloud.database().collection("userBasics")
let name = ""
let grade = ""
let major = ""
let signature = ""
Page({
  data: {
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
          id:res.data.id
        })
        })
      }
    })
    
  },
  
//拿到修改的grade值
updgrade(e){
  grade = e.detail.value
},

//拿到修改的major值
updmajor(e){
  major = e.detail.value
},

//拿到修改的name值
updname(e){
  name = e.detail.value
},

//拿到修改的signature值
updsignature(e){
  signature = e.detail.value
},

//修改个人信息
save(){
    DB.doc(this.data.id).update({
     data:{
        name:name,
        grade:grade,
        major:major,
        signature:signature
     },
    success(res){
      console.log("更新成功",res)
    },
    fail(res){
      console.log("更新失败",res)
    }
    })
    wx.navigateTo({
      url: `../minePage/minePage`,
    })
 }
})