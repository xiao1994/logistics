var logisticsData = require('../../../data/logistics-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      password_key: logisticsData.password,
    })
  },
  passwordTap: function (event) {
    wx.switchTab({
      url: "../../me/me"
    })
  }
})