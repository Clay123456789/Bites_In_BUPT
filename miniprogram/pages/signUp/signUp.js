// pages/signUp/signUp.js
const db = wx.cloud.database().collection("userBasics")
  Page({

    /**
     * 页面的初始数据
     */
    data: {
      openid:"",
      name:"编辑我的昵称",
      img:"",
      gender:"",
      signature:"编辑个签，展现我的独特态度！",
      grade:"",
      major:"",
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
        }]
      },
    onLoad: function () {
      this.getuser()
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

    //输入框input事件的执行逻辑
    nameInput(e){
      this.setData({
        name: e.detail.value
      });
    },
    signatureInput(e){
      this.setData({
        signature: e.detail.value
      });
    },


    // 获取用户信息
    getuser(){
      let that = this
      wx.getUserInfo({
        lang:"zh_CN",//把字符换成中文
        success: function(res) {
          var userInfo = res.userInfo
          that.setData({
            name:userInfo.nickName,
            img:userInfo.avatarUrl,
            gender:userInfo.gender
          })
        }
      })
    },
    finish:function(res){
      //将头像上传至云存储
      
      console.log("img-",this.data.img),
      wx.cloud.uploadFile({
        //云储存的路径及文件名
        cloudPath: "img/" + "head/" +this.data.openid +".png",
        filePath : this.data.img, //要上传的图片/文件路径
        success : (uploadres) => { //上传图片到云储存成功
          console.log(uploadres)
          wx.showLoading({ //显示加载提示框 不会自动关闭 只能wx.hideLoading关闭
            title : "图片上传中", //提示框显示的提示信息
            mask : true, 
            //显示透明蒙层，防止触摸。为true提示的时候不可以对屏幕进行操作，不写或为false时可以操作屏幕
            success : function () {
                wx.hideLoading() //让提示框隐藏、消失
            }
          });
        },
        fail : (err) => {
          console.log(err)
        }
      })
      /*保存信息至数据库 */
      var { name, img, gender,signature, grade,major} = this.data
      db.add({
        data:{
          "name":name,
          "img":img,
          "gender":gender,
          "signature":signature,
          "grade":grade,
          "major":major
        }
      })
      /* 跳转主页*/ 
      wx.switchTab({
        url: '../homePage/homePage'
       })
       
    },
    //上传图片
    addImg : function(){
      wx.chooseImage({//选择图片
          count : 1, //规定选择图片的数量，默认9
          sizeType : ["original","compressed"], //规定图片的尺寸， 原图/压缩图
          sourceType : ["album","camera"], //从哪里选择图片， 相册/相机
          success : (chooseres)=>{ //接口调用成功的时候执行的函数
            //此时并不上传到云存储，而是生成临时地址，并显示选择的图片
            this.setData({
              img:chooseres.tempFilePaths[0]
            })
          },
          fail : (err) => {
            console.log(err)
          }
      })
    }
  })