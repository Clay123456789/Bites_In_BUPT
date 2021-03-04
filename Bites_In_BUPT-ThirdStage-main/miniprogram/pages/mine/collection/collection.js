const DB=wx.cloud.database()
var total = ''
var info = []
// pages/mine/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1:[],
    list2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOpenid()
    let that = this
    wx.cloud.callFunction({
      name: "getCollectionData",
      data:{
        collectionName:"dishes"//设置要获取的集合名称
      },
      success(res) {
       console.log("读取成功", res)

       var v = []
       for(let h=0;h<that.data.total;h++){
       var t=0
       var Array = res.result    
       var lily = Array.filter((p)=>{
            return p._id==that.data.info[h]  
          });
          v[h] =lily[t]
          }
          that.setData({       
            list1:v    
         })
          console.log("成功",v)
      },
      fail(res) {
        console.log("读取失败", res)
      }
    })
  },
  getOpenid(){
    var openid
    wx.cloud.callFunction({
      name:'getOpenid',
      complete:res=>{
         openid= res.result.openid
        //根据用户ID查询相关信息
        DB.collection('userBasics').where({
          _openid:openid
        }).get().then(res=>{
        console.log("读取成功", res)
        console.log("读取成功", res.data[0].collects.length)
        this.setData({
          list2:res.data,
          info:res.data[0].collects,
          total:res.data[0].collects.length
        })
        })
      }
    }) 
  },

  previewFoodImage(e){
    console.log(e)
     wx.previewImage({
       urls: [e.currentTarget.dataset.src],
       current: '',
       success: (res) => {},
       fail: (res) => {},
       complete: (res) => {},
     })
   },

   sousuo: function (e) {
    wx.reLaunch({
      url: '../../search/search',
    })
  },
  
   showMoreDetail:function(e){
    console.log(e)
    wx.navigateTo({
      url: `../food_detail/food_detail?foodid=${e.currentTarget.dataset.foodid}&foodname=${e.currentTarget.dataset.foodname}`,
    })
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