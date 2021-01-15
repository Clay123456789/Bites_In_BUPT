// pages/findPage/findPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    navState: 0,//导航状态
    topic: [{
      id: "1",
      img: "/images/login.jpg",
      name: '校周探店'
    },
    {
      id: "2",
      img: "/images/login.jpg",
      name: '寻物启事'
    },
    {
      id: "3",
      img: "/images/login.jpg",
      name: '失物招领'
    },
    {
      id: "4",
      img: "/images/login.jpg",
      name: '新晋美食'
    },
    
  ],
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
}
})