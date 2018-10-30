// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailDb: {},
        isLoading: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const {
            id
        } = options;
        console.log(id);
        this.getDetail(id);
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
    getDetail(id) {
        wx.showLoading({
            title: '正在加载',
        })
        wx.request({
            url: `https://www.koocv.com/h5-view/v/movie/detail/?id=${id}`,
            success: (res) => {
                console.log(res);
                this.setData({
                    detailDb: res.data,
                    isLoading: true
                });
                wx.hideLoading();
            }
        })
    }
})