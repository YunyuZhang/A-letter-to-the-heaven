// info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    birthday: '',
    dod: '',
    relation: '',
    
  },
  // inp is short for input 
  nameInput: function(inp){
    this.data.name = inp.detail.value;
    
    
    },

  birthdayInput: function (inp) {
    this.data.birthday = inp.detail.value;


  },
  //dod is short for date of death
  dodInput: function (inp) {
    this.data.dod = inp.detail.value;


  },

  relationInput: function (inp) {
    this.data.relation = inp.detail.value;


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
  
  },

  listenerLogin: function () {
    wx.navigateTo({
      url: '../letter/letter'
    })
    //打印
    console.log('姓名: ', this.data.name);
    console.log('出生日期: ', this.data.birthday);
    console.log('逝世日期: ', this.data.dod);
    console.log('关系: ', this.data.relation)
  }
  
})