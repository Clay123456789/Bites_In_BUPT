// pages/meal/basicMeal_detail/basicMeal_detail.js
Page({
  data: {
    listHeight: 340,
    navState: 0,//导航状态
    toDoList:[],//待打印数据
    toDoList_img:[],
    remarkList:[]
        },
  //点击导航
  navSwitch: function(e) {
    //console.log(e)
    let index = e.currentTarget.dataset.index;
    this.setData({
    navState:index
    })
    },
    bindchange(e) {
      // console.log(e.detail.current)
      let index = e.detail.current;
      this.setData({
      navState:index
      })
      },

  //获取数据
  get_toDoList:function(storename,location){
    let len=this.data.toDoList.length
    wx.cloud.database().collection('dishes').where({
     windows:storename,
     location:location,
     category:"中晚餐"
    })
    .skip(len)
    .get()
    .then(res=>{
      console.log("获取成功",res)
      this.setData({
        toDoList:this.data.toDoList.concat(res.data)
      })
    })
    .catch(res=>{
      console.log("获取失败",res)
    })
  },
  showMoreDetail:function(e){
    console.log(e)
    wx.navigateTo({
      url: `../food_detail/food_detail?foodid=${e.currentTarget.dataset.foodid}&foodname=${e.currentTarget.dataset.foodname}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //动态设置标题
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.storename
    });
    this.get_toDoList(options.storename,options.location)
},
//轮转图放大预览
previewSwiperImage(e) {
 // console.log(e)
 var imgsrc=e.currentTarget.dataset.src;
// var imglist=e.currentTarget.dataset.list
  wx.previewImage({
    current:imgsrc,
    urls: [imgsrc],//urls:imglist用不了
    success: (res) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
 },
 //具体菜品放大预览
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
  onReachBottom: function (e) {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})