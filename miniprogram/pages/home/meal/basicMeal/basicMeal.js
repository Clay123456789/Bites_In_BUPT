// pages/meal/basicMeal/basicMeal.js
const DB=wx.cloud.database().collection("dishes")
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
          storeId: 1,
            name: "基本伙",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 2,
            name: "港式铁板炒饭、过桥米线",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "铁板炒饭、黄焖类、过桥米线",
          },
          {
            storeId: 3,
            name: "五谷鱼粉",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 4,
            name: "醉骨饭",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 5,
            name: "张秀梅烤肉饭",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 6,
            name: "麻辣烫",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "冒菜、麻辣开胃菜、特色粉",
          },
          {
            storeId: 7,
            name: "初客盖饭",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "盖饭、炒饭、寿司、水饺",
          },
          {
            storeId: 8,
            name: "手抓饼、烤冷面",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 9,
            name: "功夫卷饼",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            
              storeId: 10,
              name: "杂粮煎饼",
              img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
              note: "",
            },
            {
              storeId: 11,
              name: "掉渣饼",
              img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
              note: "",
            },
            {
              storeId: 12,
              name: "千里香馄饨粉面",
              img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
              note: "",
            },
        ]
      },
      //学二
      {
        titleId: "title2",
        title: "学二",  
        items: [{
          storeId: 1,
            name: "学二基本伙",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 2,
            name: "汤面",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 3,
            name: "盖饭拌面",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 4,
            name: "炒饭炒粉",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 5,
            name: "干锅",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 6,
            name: "无名缘米粉",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
          {
            storeId: 7,
            name: "拉面",
            img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
            note: "",
          },
         
        ]
      },
      //学三
      {
        titleId: "title3",
        title: "学三",  
        items: [{
          storeId: 1,
          name: "学三基本伙",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
       
        ]
      },
      //学四
      {
        titleId: "title4",
        title: "学四",  
        items: [{
          storeId: 1,
          name: "学四基本伙",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 2,
          name: "水煮鱼",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 3,
          name: "烤盘时代",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 4,
          name: "粉面",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 5,
          name: "黄焖米饭",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 6,
          name: "花甲粉、方便面、瓦罐汤",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 7,
          name: "麻辣烫",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        ]
      },
      //学五
      {
        titleId: "title5",
        title: "学五",  
        items: [ {
          storeId: 1,
          name: "学五基本伙",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 2,
          name: "麻辣烫、粉类",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 3,
          name: "机器人家常刀削面",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 4,
          name: "香河肉饼",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 5,
          name: "西式简餐",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 6,
          name: "煲仔饭",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 7,
          name: "精品木桶饭",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 8,
          name: "麻辣烫、粉类",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },

        ]
      },
      //教一
      {
        titleId: "title6",
        title: "教一",  
        items: [ {
          storeId: 1,
          name: "基本伙（暂无数据）",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 2,
          name: "麻辣烫",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 3,
          name: "重庆小面",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 4,
          name: "麻辣烫、",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        ]
      },
      //教二
      {
        titleId: "title7",
        title: "教二",  
        items: [ {
          storeId: 1,
          name: "基本伙",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        ]
      },
      //教三
      {
        titleId: "title8",
        title: "教三",  
        items: [ {
          storeId: 1,
          name: "教三基本伙",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 2,
          name: "面饺类",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
       
        ]
      },
      //教四
      {
        titleId: "title9",
        title: "教四",  
        items: [ {
          storeId: 1,
          name: "老北京烤鸭",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 2,
          name: "韩式铁板饭",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 3,
          name: "黄焖米饭、牛肉汤",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 4,
          name: "烤肉饭、饺类",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 5,
          name: "旋转火锅、水煮、热干面",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 6,
          name: "烤鱼饭、渔粉",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        ]
      },
      //教五
      {
        titleId: "title10",
        title: "教五",  
        items: [ {
          storeId: 1,
          name: "教五基本伙",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 2,
          name: "盖/炒饭、饺面",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
        },
        {
          storeId: 3,
          name: "蛋包饭、河粉意面",
          img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/store.png",
          note: "",
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
  //  console.log(e)
    wx.navigateTo({
      url: `../basicMeal_detail/basicMeal_detail?storename=${e.currentTarget.dataset.storename}&location=${e.currentTarget.dataset.location}`,
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