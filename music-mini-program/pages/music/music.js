// pages/music/music.js
import url from '../../config/httpUrl.js';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        music: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const that = this;
        const {
            type,
            name
        } = options;
        console.log(options);
        wx.setNavigationBarTitle({
            title: name,
        })
        wx.request({
            url: `${url.list}?idx=${type}`,
            success: function(res) {
                that.setData({
                    music: res.data.playlist.tracks
                });
                console.log(res);
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    listenmusic(e) {
        const {
            id
        } = e.currentTarget.dataset.current;
        wx.navigateTo({
            url: `/pages/play/play?id=${id}`,
        })
        console.log(e.currentTarget.dataset.current)
    }
})