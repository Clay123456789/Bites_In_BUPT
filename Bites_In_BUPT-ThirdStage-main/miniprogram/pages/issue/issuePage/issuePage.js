// pages/issuePage/issuePage.js
const app = getApp();
Page({
  data: {
    staticImg:app.globalData.staticImg,
    current:0,
    attitude:true,
    time: true,
    efficiency: true,
    environment:true,
    professional:true,
    userStars:[
      "iconfont icon-xingxingc",
      "iconfont icon-xingxingc",
      "iconfont icon-xingxingc",
      "iconfont icon-xingxingc",
      "iconfont icon-xingxingc",
    ],
    wjxScore:5,
    // textarea
    min: 5,//最少字数
    max: 300, //最多字数 
    pics:[],
  },
  // 星星点击事件
  starTap: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempUserStars = this.data.userStars; // 暂存星星数组
    var len = tempUserStars.length; // 获取星星数组的长度
    for (var i = 0; i < len; i++) {
      if (i <= index) { // 小于等于index的是满心
        tempUserStars[i] = "iconfont icon-xingxingc";
        that.setData({
          wjxScore:i+1,
        })
      } else { // 其他是空心
        tempUserStars[i] = "iconfont icon-xingxing"
      }
    }
    // 重新赋值就可以显示了
    that.setData({
      userStars: tempUserStars
    })
  },
  // 标签
  label:function(e){
    console.log(e)
    var that = this;
    that.setData({
      taste:!e.currentTarget.dataset.index
    })
  },
   labe2: function (e) {
    console.log(e)
    var that = this;
    that.setData({
      time: !e.currentTarget.dataset.index
    })
  },
   labe3: function (e) {
     console.log(e)
     var that = this;
     that.setData({
       price: !e.currentTarget.dataset.index
     })
   },
    labe4: function (e) {
     console.log(e)
     var that = this;
     that.setData({
       environment: !e.currentTarget.dataset.index
     })
   },
    labe5: function (e) {
      console.log(e)
      var that = this;
      that.setData({
        types: !e.currentTarget.dataset.index
      })
    },
    labe6: function (e) {
      console.log(e)
      var that = this;
      that.setData({
        attitude: !e.currentTarget.dataset.index
      })
    },
    labe7: function (e) {
      console.log(e)
      var that = this;
      that.setData({
        look: !e.currentTarget.dataset.index
      })
    },
   
    // 留言
    //字数限制
  inputs: function (e) {
      // 获取输入框的内容
      var value = e.detail.value;
      // 获取输入框内容的长度
      var len = parseInt(value.length);
      //最多字数限制
      if (len > this.data.max) return;
      // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
      this.setData({
        currentWordNumber: len //当前字数
      });
    },
    // 图片
    choose: function (e) {//这里是选取图片的方法
    var that = this;
    var pics = that.data.pics;
    wx.chooseImage({
      count: 5 - pics.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {

        var imgsrc = res.tempFilePaths;
        pics = pics.concat(imgsrc);
        console.log(pics);
        // console.log(imgsrc);
        that.setData({
          pics: pics,
          // console.log(pics),
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },
  uploadimg: function () {//这里触发图片上传的方法
    var pics = this.data.pics;
    console.log(pics);
    app.uploadimg({
      url: 'https://........',//这里是你图片上传的接口
      path: pics//这里是选取的图片的地址数组
    });
  },
  onLoad: function (options) {

  },
  // 删除图片
  deleteImg: function (e) {
    var pics = this.data.pics;
    var index = e.currentTarget.dataset.index;
    pics.splice(index, 1);
    this.setData({
      pics: pics
    });
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var pics = this.data.pics;
    wx.previewImage({
      //当前显示图片
      current: pics[index],
      //所有图片
      urls: pics
    })
  },
})