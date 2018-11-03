// pages/classify-list/classify-list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: [],
        page: 0,
        isLoading: false,
        type: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let {
            type
        } = options;
        wx.setNavigationBarTitle({
            title: type,
        })
        this.setData({
            type
        });
        this.loadmore(type);

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
    loadmore: function(type) {
        if (!this.data.isLoading) {
            this.loadData(this.data.type);
        }

    },
    movieDetail(e) {
        console.log(e);
        let {
            type
        } = this.data;
        const {
            id,
            record
        } = e.currentTarget.dataset;
        let viewrecord = wx.getStorageSync('viewRecord') || [];
        wx.setStorage({
            key: 'viewRecord',
            data: viewrecord.concat(record),
        })
        wx.navigateTo({
            url: `/pages/detail/detail?id=${id}`,
        })
    },
    loadData: function(type) {
        let {
            page,
            movie
        } = this.data;
        console.log(type);
        this.setData({
            isLoading: true
        });
        wx.showLoading({
            title: '正在加载中',
            mask: true
        });
        wx.request({
            url: `https://www.koocv.com/h5-view/v/movie/list?tag=${type}&page_start=${page}`,
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