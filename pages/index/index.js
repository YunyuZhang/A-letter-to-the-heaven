//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Test',
    userInfo: {},
    imageUrl: "../../pic/logo.jpg"  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../../logs/logs'
    })
  },
  
  // bindViewTap: function(){
  //   wx.navigateTo({
  //     url: '../input/input',
  //   })
  // },

  
  tapName: function () {
    wx.navigateTo({
      url: '../info/info'
    })
  },


  
  memorial: function () {
    wx.navigateTo({
      url: '../foru/foru'
    })
    
  },  


  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
