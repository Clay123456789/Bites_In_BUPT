// pages/home/meal/food_detail/food_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     food_detail:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  get_food_detail:function(foodid){
    wx.cloud.database().collection('dishes').where({
     _id:foodid,
    })
    .get()
    .then(res=>{
      console.log("获取成功",res)
      this.setData({
        food_detail:res.data
      })
    })
    .catch(res=>{
      console.log("获取失败",res)
    })
  },
  onLoad: function (options) {
    console.log(options)
    this.get_food_detail(options.foodid)
    wx.setNavigationBarTitle({
      title: options.foodname
    });
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