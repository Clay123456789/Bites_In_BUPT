// pages/homePage/homePage.js
Page({

  data: {
    navState: 0,//导航状态
    category: [{
      id: "1",
      img: "https://p0.meituan.net/adunion/90c2a98c76b1de351d6ba930fdb0cc6931708.jpg",
      name: '早餐'
    },
    {
      id: "2",
      img: "/images/login.jpg",
      name: '中晚餐'
    },
    {
      id: "3",
      img: "/images/login.jpg",
      name: '夜宵'
    },
    {
      id: "4",
      img: "/images/login.jpg",
      name: '更多'
    },
    
  ],
  },
 
  goList(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/meal/meal?content=${e.currentTarget.dataset.content}&tags=${e.currentTarget.dataset.tags}`,
    })
  },

  sousuo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  //监听滑块
 bindchange(e) {
  // console.log(e.detail.current)
  let index = e.detail.current;
  this.setData({
  navState:index
  })
  },
  //点击导航
  navSwitch: function(e) {
  // console.log(e.currentTarget.dataset.index)
  let index = e.currentTarget.dataset.index;
  this.setData({
  navState:index
  })
  },
})