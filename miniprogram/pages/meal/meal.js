Page({
  /**
   * 页面的初始数据
   */
  data: {
    viewTo: "",
    viewToLeft: "",
    listHeight:400,
    activeIndex: 0,
    food: [
      {
        titleId: "title1",
        title: "学一",  
        items: [{
            foodId: 1,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            foodId: 2,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            foodId: 3,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            foodId: 4,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      {
        titleId: "title2",
        title: "学二",  
        items: [{
            foodId: 5,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            foodId: 6,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      {
        titleId: "title3",
        title: "学三",  
        items: [{
            foodId: 7,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            foodId: 8,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
  
    ]
  },
  sousuo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /*分类选择*/
  selectFood(e) {
    this.setData({
      activeIndex: e.target.dataset.index,
      viewTo: e.target.dataset.titleid
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  
});