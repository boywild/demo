// pages/play/play.js
import url from '../../config/httpUrl.js';
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        song: {},
        duration: 0,
        currentTime: 0,
        isDown: false,
        lyric: {
            "0": "正在获取歌词"
        },
        currentLrc: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const that = this;
        const {
            id
        } = options;
        wx.request({
            url: `${url.song}?ids=${id}`,
            success: function(res) {
                that.setData({
                    song: res.data.songs[0]
                });
            }
        });
        wx.request({
            url: `${url.lyric}?id=${id}`,
            success: function(res) {
                const lyric = res.data.lrc.lyric;
                // that.setData({
                //     song: res.data.lrc.lyric
                // });
                let obj = {};
                lyric.replace(/\[(.*?)](.*)/g, function($0, $1, $2) {
                    obj[$1.slice(0, 5)] = $2;
                });
                that.setData({
                    lyric: obj
                });
                console.log(res);
            }
        });
        let {
            song
        } = app.globalData;
        if (!song) {
            app.globalData.song = song = wx.createInnerAudioContext();
        }
        song.src = `http://music.163.com/song/media/outer/url?id=${id}.mp3`;
        song.onPlay(() => {
            this.setData({
                play: false
            });
        })
        song.onTimeUpdate(() => {
            if (this.data.duration !== song.duration) {
                this.setData({
                    duration: song.duration,
                    currentTime: song.duration,
                });
            }
            if (this.data.currentTime !== song.currentTime && !this.data.isDown) {
                this.setData({
                    currentTime: song.currentTime,
                });
            }
            const {
                currentTime: time
            } = song;
            const minute = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            const timeFormate = (minute < 10 ? '0' + minute : minute + '') + ':' + (seconds < 10 ? '0' + seconds : seconds + '');
            const {
                lyric,
                currentLrc
            } = this.data;
            if (timeFormate in lyric && 'ele-' + timeFormate !== currentLrc) {
                this.setData({
                    currentLrc: `ele-${timeFormate}`
                });
            }
            console.log(timeFormate);
        })
        song.play();
        // song.pause();
        console.log(app.globalData)
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
    changing(e) {
        this.setData({
            isDown: true
        });
    },
    change(e) {
        this.setData({
            isDown: false,
            currentTime: e.detail.value
        });
        console.log(app);
        app.globalData.song.seek(e.detail.value);
    },
    tap() {
        const {
            song
        } = app.globalData;
        song.paused ? song.play() : song.pause();
    }
})