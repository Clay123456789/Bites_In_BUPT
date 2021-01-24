// pages/meal/basicMeal_detail/basicMeal_detail.js
Page({
  data: {
    listHeight: 340,
    navState: 0,//导航状态
    food: [{
      storeId: 101,
      title: "基本伙",
      //轮播图图片数组
      images:[{   img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/学一/窗口内部轮转栏展示图/基本伙.gif",},
            
             ],
      foodlist: [{//食物列表
          name: "1",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        },
        {
          name: "2",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        },
        {
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        }
      ]
    },
    {
      storeId: 102,
      title: "港式铁板炒饭+过桥米线",
      images:[{   img:"cloud://flt-env-8g5lcfzi29bfeeae.666c-flt-env-8g5lcfzi29bfeeae-1304781293/学一/窗口内部轮转栏展示图/学一港式铁板炒饭和过桥米线.gif",},
             ],
      foodlist: [{
        name: "21",
        price: 0,
        note: "xxx",
        img:"/images/login.jpg",
        },
        {
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        },
        {
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        }
      ]
    },
    {
      storeId: 103,
      title: "窗口三",
      images:[{
        imgId:1,
        img:"https://p0.meituan.net/adunion/90c2a98c76b1de351d6ba930fdb0cc6931708.jpg",
    },
    {
      imgId:2,
        img:"https://p0.meituan.net/adunion/90c2a98c76b1de351d6ba930fdb0cc6931708.jpg",
  },
   {
    imgId:3,
      img:"https://p0.meituan.net/adunion/90c2a98c76b1de351d6ba930fdb0cc6931708.jpg",
    }],
      foodlist: [{
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        },
        {
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        },
        {
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        }
      ]
    },
    {
      storeId: 104,
      title: "窗口四",
      images:[{   img:"https://p0.meituan.net/adunion/90c2a98c76b1de351d6ba930fdb0cc6931708.jpg",},
      {   img:"https://p0.meituan.net/adunion/90c2a98c76b1de351d6ba930fdb0cc6931708.jpg", },
      {   img:"https://p0.meituan.net/adunion/90c2a98c76b1de351d6ba930fdb0cc6931708.jpg",}
     ],
      foodlist: [{
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        },
        {
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        },
        {
          name: "xxxxxx",
          price: 0,
          note: "xxx",
          img:"/images/login.jpg",
        }
      ]
    },
          ],
    toDoList:[ //待打印数据的格式
    {
      name: "",
      price: "",
      note: "",
      img:"",
    }],
    toDoList_img:[ //待打印数据的格式
      {
        img:"",
      }]
    
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    //动态设置标题
    wx.setNavigationBarTitle({
      title: options.storename
    });
      var food= this.data.food;
      var toDoList=this.data.toDoList;
      var toDoList_img=this.data.toDoList_img;
    for (var i = 0; i < food.length; i++) {
      if (food[i].storeId == options.tags) {
      toDoList=food[i].foodlist,
      toDoList_img=food[i].images
    }
  }
    this.setData({
      // 把新的data数组赋值给arrays
     toDoList: toDoList,
     toDoList_img: toDoList_img,
    })
   // console.log(this.data.toDoList)
  //console.log(this.data.toDoList_img)
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