

Page({
  data: {
    searchText:"",
    searchButton:"0",
    historyList:[],
    list:[],
    
     tuijian:[
{
  name:"烤盘饭",
},
{
  name:"水煮鱼",
},
{
  name:"烤冷面",
}

     ],
      
  },


  goSearch(e){
    console.log(e)
  this.data.historyList.push(this.data.searchText)
  var length=this.data.historyList.length
  console.log("historyList.length==",length)
  console.log("historyList内容：",this.data.historyList)
   this.setData({
     searchButton:length,
     list:this.data.historyList
  })
  console.log("searchButton==",this.data.searchButton)
      },
  bindKeyInput(e){
    //console.log(e.detail.value)
    this.setData({
      searchText:e.detail.value
      }
    )
   
  },
 
  onLoad: function (options) {
    this.openLocationsercher();
  },
  
});


