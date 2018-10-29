// pages/movie/moive.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: [],
        page: 0,
        isLoading: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.loadmore();
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
    loadmore: function() {
        if (!this.data.isLoading) {
            this.loadData();
        }

    },
    loadData: function() {
        let {
            page,
            movie
        } = this.data;
        console.log('加载更多')
        this.setData({
            isLoading: true
        });
        wx.showLoading({
            title: '正在加载中',
            mask: true
        });
        wx.request({
            url: `https://www.koocv.com/h5-view/v/movie/list/?page_start=${page}`,
            success: (res) => {
                page += 10;
                this.setData({
                    movie: [...movie, ...res.data.subjects],
                    page,
                    isLoading: false
                });
                wx.hideLoading();
                console.log(res);
            }
        })
    }
})