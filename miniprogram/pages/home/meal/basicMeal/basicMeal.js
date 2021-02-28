// pages/meal/basicMeal/basicMeal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewTo: "",
    viewToLeft: "",
    listHeight:400,
    activeIndex: 0,
    store: [
      //学一
      {
        titleId: "title1",//这个就是要英文字母开头，scroll-view-to能用，就按这个格式好了
        title: "学一",  
        items: [{
          storeId: 101,//类似房号的写法
            name: "基本伙",
            img:"/images/login.jpg",
            note: "",
          },
          {
            storeId: 102,
            name: "港式铁板炒饭+过桥米线",
            img:"/images/login.jpg",
            note: "铁板炒饭、黄焖类、过桥米线",
          },
          {
            storeId: 103,
            name: "五谷鱼粉",
            img:"/images/login.jpg",
            note: "",
          },
          {
            storeId: 104,
            name: "醉骨饭",
            img:"/images/login.jpg",
            note: "",
          },
          {
            storeId: 105,
            name: "张秀梅烤肉饭",
            img:"/images/login.jpg",
            note: "",
          },
          {
            storeId: 106,
            name: "麻辣烫",
            img:"/images/login.jpg",
            note: "冒菜、麻辣开胃菜、特色粉",
          },
          {
            storeId: 107,
            name: "初客盖饭",
            img:"/images/login.jpg",
            note: "盖饭、炒饭、寿司、水饺",
          },
        ]
      },
      //学二
      {
        titleId: "title2",
        title: "学二",  
        items: [{
          storeId: 201,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 202,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      //学三
      {
        titleId: "title3",
        title: "学三",  
        items: [{
          storeId: 301,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 302,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      //学四
      {
        titleId: "title4",
        title: "学四",  
        items: [{
          storeId: 301,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 302,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      //学五
      {
        titleId: "title5",
        title: "学五",  
        items: [{
          storeId: 301,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 302,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      //教一
      {
        titleId: "title6",
        title: "教一",  
        items: [{
          storeId: 301,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 302,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      //教二
      {
        titleId: "title7",
        title: "教二",  
        items: [{
          storeId: 301,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 302,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      //教三
      {
        titleId: "title8",
        title: "教三",  
        items: [{
          storeId: 301,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 302,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      //教四
      {
        titleId: "title9",
        title: "教四",  
        items: [{
          storeId: 301,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 302,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
        ]
      },
      //教五
      {
        titleId: "title10",
        title: "教五",  
        items: [{
          storeId: 301,
            name: "xxxxxx",
            img:"/images/login.jpg",
            price: 0,
            note: "xx",
          },
          {
            storeId: 302,
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
      url: '../../search/search',
    })
  },
  selectStore(e) {
    //console.log(e)
    this.setData({
      activeIndex: e.target.dataset.index,
      viewTo: e.target.dataset.titleid
    });
  },
  goStore(e) {
    //console.log(e)
    wx.navigateTo({
      url: `../basicMeal_detail/basicMeal_detail?storename=${e.currentTarget.dataset.storename}&tags=${e.currentTarget.dataset.tags}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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