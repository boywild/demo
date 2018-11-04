// pages/api/api.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
    chooseAddress() {
        wx.chooseAddress({
            success(res) {
                console.log(res);
            },
            fail(res) {
                console.log(res);
            }
        })
    },
    openSetting() {
        wx.openSetting({
            success(res) {
                console.log(res);
            },
            fail(res) {
                console.log(res);
            }
        })
    },
    checkSession() {
        wx.checkSession({
            success(res) {
                console.log(res);
            },
            fail(res) {
                onsole.log(res);
            }
        })
    },
    getUserInfo() {
        wx.login({
            success() {
                wx.getUserInfo({
                    withCredentials: true,
                    success(res) {
                        console.log(res);
                    },
                    fail(res) {
                        onsole.log(res);
                    }
                })
            }

        })

    },
    startRecord() {
        const RecorderManager = wx.getRecorderManager();
        RecorderManager.start({

        })
    },
    showShareMenu() {
        wx.showShareMenu({
            success(res) {
                console.log(res);
            },
            fail(res) {
                onsole.log(res);
            }
        })
    },
    hideShareMenu() {
        wx.hideShareMenu({
            success(res) {
                console.log(res);
            },
            fail(res) {
                onsole.log(res);
            }
        })
    }
})