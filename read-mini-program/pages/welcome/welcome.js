Page({
    data: {
        userInfo: {}
    },
    onLoad() {
        const that = this;
        wx.getSetting({
            success(res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success(res) {
                            that.setData({
                                userInfo: res.userInfo
                            });
                            console.log(res.userInfo);
                        }
                    })
                }
            }
        })
    },
    onTap: function(event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });

        wx.switchTab({
            url: "../posts/post"
        });

    },
    onReachBottom: function(event) {
        console.log('asfasdfa')
    }
})