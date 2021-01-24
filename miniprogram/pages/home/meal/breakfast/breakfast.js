// pages/meal/breakfast/breakfast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    
      imglist:[
      {
        src:"https://p.pstatp.com/origin/fecd0002d2000e132139",
        name:"学一早餐",
        url:"/pages/zaocan/zaocan",
      },
      {
        src:"https://p.pstatp.com/origin/137710001beb389104a2e",
        name:"学二早餐",
      },
      {
        src:"https://p.pstatp.com/origin/138ff00005d6b4e0a3d62",
        name:"教一早餐",
      },
      {
        src:"https://p.pstatp.com/origin/1387b00009f7c313b0063",
        name:"教二早餐",
      },

    
    ],
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  if(options.tags){
  this.setData({
   id:options.tags,
   name:options.content
  });
  }
  },

  sousuo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
})