// pages/detail/detail.js
var datas = require('../../datas/list-data')
var appDatas = getApp()
console.log(appDatas)


Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index:null,
    isCollection:false,
    isMusic:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取参数值
    var index = (options.index);
    //更新data中detailObj的状态值
    this.setData({
      detailObj : datas.list_data[index],
      index
    });
    //根据本地缓存的数据判断用户是否收藏当前文章
    var detailStorage = wx.getStorageSync('isCollection');
    console.log(detailStorage);

    if(!detailStorage){
      wx.setStorageSync('isCollection', {})
    }
    //判断用户是否收藏
    if(detailStorage[index]){
      //收藏过
      this.setData({
        isCollection:true
      })
    }
    //监听音乐播放
    wx.onBackgroundAudioPlay(() =>{
      console.log("音乐播放")
      //修改isMusic状态值
      this.setData({
        isMusic:true
      })
      //修改appDatas中的数据
      appDatas.data.isPlay = true;
      appDatas.data.pageIndex = index;
    });
    //判断音乐是否在播放
    if(appDatas.data.isPlay && appDatas.data.pageIndex === index){
      this.setData({
        isMusic:true
      })
    }

    //监听音乐暂停
    wx.onBackgroundAudioPause(() =>{
      console.log("音乐暂停")
      this.setData({
        isMusic:false
      })
      //修改appDatas中的数据
      appDatas.data.isPlay = false;
    })

  },
  
  handlec(){
    var isCollection = !this.data.isCollection;
    //更新状态
    this.setData({
      isCollection
    });
    //提示用户成功
    var title = isCollection?'收藏成功':'取消收藏'
    wx.showToast({
      title,
      icon:'success'
    })
    //缓存数据到本地
    var {index} = this.data
    //不可行会覆盖以前的值
    // var obj = {}
    wx.getStorage({
      key: 'isCollection',
      success: (datas) =>{
        var obj = datas.data;
        obj[index] = isCollection
      wx.setStorage({
        key: 'isCollection',
        data: obj,
    });
      }
    })
   
  },

  //处理音乐播放
  handMusic(){
    var isMusic = !this.data.isMusic
    this.setData({
      isMusic
    })
    //控制音乐播放
    if(isMusic){
      //播放音乐
      var { dataUrl,title } = this.data.detailObj.music
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    }else{
      //暂停音乐
      wx.pauseBackgroundAudio()
    }
  },

  //处理点击分享功能
  hanleShare(){
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈','分享到qq空间','分享到微博'
      ],
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