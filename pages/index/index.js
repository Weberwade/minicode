// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    isNow: true
  },
  //给Care me!定义一个点击函数
  handleClick(){
    //点击跳转到list页面
    wx.switchTab({
      url:'/pages/list/list'
    })
  },
  //定义一个新的函数 判断授权和登录信息
  getU(){
    //判断用户是否授权了
    wx.getSetting({
      success:(data) => {
        if (data.authSetting["scope.userInfo"]) {
          //获取到了用户信息
          this.setData({
            isNow:false
          });
        }else{
          //没有获取到用户信息
          this.setData({
            isNow:true
          })
        }
      }
    })

    //获取用户登录的信息
    wx.getUserInfo({
      success: (data) => {
        //更新data中的userInfo数据
        this.setData({
          userInfo:data.userInfo
        });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getU();
  },
  handleGetUserInfo(data){
    console.log(data)
    //判断用户点击的是否是允许
    if (data.detail.rawData) {
      //用户点击的是允许
      this.getU();
    }
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