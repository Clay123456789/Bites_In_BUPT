const DB=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list1:[],
      list2:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getOpenid()
   let that = this
   DB.collection('remarks').get({
     success(res){
       that.setData({
         list1:res.data
       })
      }
   })
  },

  getOpenid(){
    var openid
    let page = this;
    wx.cloud.callFunction({
      name:'getOpenid',
      complete:res=>{
         openid= res.result.openid
        //根据用户ID查询相关信息
        DB.collection('userBasics').where({
          _openid:openid
        }).get().then(res=>{    
        this.setData({       
           list2:res.data       
        })
        })
      }
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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})