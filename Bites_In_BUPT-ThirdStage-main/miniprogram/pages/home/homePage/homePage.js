// pages/home/homePage/homePage.js
Page({

  data: {
    navState: 0,//导航状态
    scrollLeft:0,
    scrollTop:0,
    msgList: [
      { 
       url: "url", 
       title: "只有学一、学二、教一、教二供应早餐" 
      },
      {
         url: "url",
         title: "学三周末不营业" },
      { 
        url: "url",
        title: "食堂一楼6:30-23:00营业" 
      }],
    category: [{
      id: "1",
      class:"iconfont icon-zaocan",
      color:"#d59e32",
      name: '早餐'
    },
    {
      id: "2",
      class:"iconfont icon-wucan2",
      color:"#d59e32",
      name: '基本伙'
    },
    {
      id: "3",
      class:"iconfont icon-qitatongyong",
      color:"#d59e32",
      name: '更多'
    },
    
  ],
 
  },
  //点击导航栏图标跳转相应页面
  changBtn:function(e){
    var $id = e.currentTarget.dataset.id;
    console.log($id);
    if ("1"== $id){
      wx.navigateTo({
        url: '../meal/breakfast/breakfast',
      })
    };
    if ("2" == $id) {
      wx.navigateTo({
        url: '../meal/basicMeal/basicMeal',
      })
    };
    if ("3" == $id) {
      wx.navigateTo({
        url: '#',
      })
    }
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