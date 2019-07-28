let utils = require('../../utils/utils')
let globalData = getApp().globalData
const key = globalData.key
let SYSTEMINFO = globalData.systeminfo
Page({
    data: {
        isIPhoneX: globalData.isIPhoneX,
        message: '',
        cityDatas: {},
        hourlyDatas: [],
        weatherIconUrl: globalData.weatherIconUrl,
        detailsDic: {
            key: [
                'tmp',
                'fl',
                'hum',
                'pcpn',
                'wind_dir',
                'wind_deg',
                'wind_sc',
                'wind_spd',
                'vis',
                'pres',
                'cloud',
                ''
            ],
            val: {
                tmp: '温度(℃)',
                fl: '体感温度(℃)',
                hum: '相对湿度(%)',
                pcpn: '降水量(mm)',
                wind_dir: '风向',
                wind_deg: '风向角度(deg)',
                wind_sc: '风力(级)',
                wind_spd: '风速(mk/h)',
                vis: '能见度(km)',
                pres: '气压(mb)',
                cloud: '云量'
            }
        },
        lifestyles: {
            comf: '舒适度指数',
            cw: '洗车指数',
            drsg: '穿衣指数',
            flu: '感冒指数',
            sport: '运动指数',
            trav: '旅游指数',
            uv: '紫外线指数',
            air: '空气污染扩散条件指数',
            ac: '空调开启指数',
            ag: '过敏指数',
            gl: '太阳镜指数',
            mu: '化妆指数',
            airc: '晾晒指数',
            ptfc: '交通指数',
            fsh: '钓鱼指数',
            spi: '防晒指数'
        },
        // 用来清空 input
        searchText: '',
        // 是否已经弹出
        hasPopped: false,
        animationMain: {},
        animationOne: {},
        animationTwo: {},
        animationThree: {},
        // 是否切换了城市
        located: true,
        // 需要查询的城市
        searchCity: '',
        setting: {},
        bcgImgList: [
            {
                src: '/img/beach-bird-birds-235787.jpg',
                topColor: '#393836'
            },
            {
                src: '/img/clouds-forest-idyllic-417102.jpg',
                topColor: '#0085e5'
            },
            {
                src: '/img/backlit-dawn-dusk-327466.jpg',
                topColor: '#2d2225'
            },
            {
                src: '/img/accomplishment-adventure-clear-sky-585825.jpg',
                topColor: '#004a89'
            },
            {
                src: '/img/fog-himalayas-landscape-38326.jpg',
                topColor: '#b8bab9'
            },
            {
                src: '/img/asphalt-blue-sky-clouds-490411.jpg',
                topColor: '#009ffe'
            },
            {
                src: '/img/aerial-climate-cold-296559.jpg',
                topColor: '#d6d1e6'
            },
            {
                src: '/img/beautiful-cold-dawn-547115.jpg',
                topColor: '#ffa5bc'
            }
        ],
        bcgImgIndex: 0,
        bcgImg: '',
        bcgImgAreaShow: false,
        bcgColor: '#2d2225',
        // 粗暴直接：移除后再创建，达到初始化组件的作用
        showHeartbeat: true,
        // heartbeat 时禁止搜索，防止动画执行
        enableSearch: true,
        openSettingButtonShow: false,
        shareInfo: {}
    },
    onLoad() {
        this.reloadPage()
    },
    onShow() {
        // onShareAppMessage 要求同步返回
        if (!utils.isEmptyObject(this.data.shareInfo)) {
            return
        }
        wx.cloud
            .callFunction({
                name: 'getShareInfo'
            })
            .then(res => {
                let shareInfo = res.result
                if (shareInfo) {
                    if (!utils.isEmptyObject(shareInfo)) {
                        this.setData({
                            shareInfo
                        })
                    }
                }
            })
    },
    onPullDownRefresh(res) {
        this.reloadPage()
    },
    onShareAppMessage(res) {
        let shareInfo = this.data.shareInfo
        return {
            title: shareInfo.title || 'Quiet Weather',
            path: shareInfo.path || '/pages/index/index',
            imageUrl: shareInfo.imageUrl
        }
    },
    reloadPage() {
        this.setBcgImg()
        this.getCityDatas()
        this.reloadInitSetting()
        this.reloadWeather()
        this.reloadGetBroadcast()
	},
	// 请求天气信息成功后更新数据并向storage写入信息
    success(data, location) {
        this.setData({
            openSettingButtonShow: false,
            searchCity: location
        })
        wx.stopPullDownRefresh()
        let now = new Date()
        // 存下来源数据
        data.updateTime = now.getTime()
        data.updateTimeFormat = utils.formatDate(now, 'MM-dd hh:mm')
        wx.setStorage({
            key: 'cityDatas',
            data
        })
        this.setData({
            cityDatas: data
        })
	},
	// 请求天气信息失败
    fail(res) {
        wx.stopPullDownRefresh()
        let errMsg = res.errMsg || ''
        // 拒绝授权地理位置权限
        if (errMsg.indexOf('deny') !== -1 || errMsg.indexOf('denied') !== -1) {
            wx.showToast({
                title: '需要开启地理位置权限',
                icon: 'none',
                duration: 2500,
                success: res => {
                    if (this.canUseOpenSettingApi()) {
                        let timer = setTimeout(() => {
                            clearTimeout(timer)
                            wx.openSetting({})
                        }, 2500)
                    } else {
                        this.setData({
                            openSettingButtonShow: true
                        })
                    }
                }
            })
        } else {
            wx.showToast({
                title: '网络不给力，请稍后再试',
                icon: 'none'
            })
        }
	},
	// 搜索输入地址天气
    commitSearch(res) {
        let val = ((res.detail || {}).value || '').replace(/\s+/g, '')
        this.search(val)
	},
	// 520/521撒花
    dance() {
        this.setData({
            enableSearch: false
        })
        let heartbeat = this.selectComponent('#heartbeat')
        heartbeat.dance(() => {
            this.setData({
                showHeartbeat: false,
                enableSearch: true
            })
            this.setData({
                showHeartbeat: true
            })
        })
    },
    // 清除输入框内容
    clearInput() {
        this.setData({
            searchText: ''
        })
    },
    // 搜索
    search(val, callback) {
        if (val === '520' || val === '521') {
            this.clearInput()
            this.dance()
            return
        }
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        })
        if (val) {
            this.setData({
                located: false
            })
            this.getWeather(val)
            this.getHourly(val)
        }
        callback && callback()
    },
    // wx.openSetting 要废弃，button open-type openSetting 2.0.7 后支持
    // 使用 wx.canIUse('openSetting') 都会返回 true，这里判断版本号区分
    canUseOpenSettingApi() {
        let systeminfo = getApp().globalData.systeminfo
        let SDKVersion = systeminfo.SDKVersion
        let version = utils.cmpVersion(SDKVersion, '2.0.7')
        if (version < 0) {
            return true
        } else {
            return false
        }
	},
	// 初始化时获取当前定位地址并请求当前地址天气和时间
    init(params, callback) {
        this.setData({
            located: true
        })
        wx.getLocation({
            success: res => {
                this.getWeather(`${res.latitude},${res.longitude}`)
                this.getHourly(`${res.latitude},${res.longitude}`)
                callback && callback()
            },
            fail: res => {
                this.fail(res)
            }
        })
	},
	// 请求天气信息
    getWeather(location) {
        wx.request({
            url: `${globalData.requestUrl.weather}`,
            data: {
                location,
                key
            },
            success: res => {
                if (res.statusCode === 200) {
                    let data = res.data.HeWeather6[0]
                    if (data.status === 'ok') {
                        this.clearInput()
                        this.success(data, location)
                    } else {
                        wx.showToast({
                            title: '查询失败',
                            icon: 'none'
                        })
                    }
                }
            },
            fail: () => {
                wx.showToast({
                    title: '查询失败',
                    icon: 'none'
                })
            }
        })
	},
	// 逐小时预报
    getHourly(location) {
        wx.request({
            url: `${globalData.requestUrl.hourly}`,
            data: {
                location,
                key
            },
            success: res => {
                if (res.statusCode === 200) {
                    let data = res.data.HeWeather6[0]
                    if (data.status === 'ok') {
                        this.setData({
                            hourlyDatas: data.hourly || []
                        })
                    }
                }
            },
            fail: () => {
                wx.showToast({
                    title: '查询失败',
                    icon: 'none'
                })
            }
        })
    },
    // 如果不是本地天气则重新请求输入框中地址天气信息
    reloadWeather() {
        if (this.data.located) {
            this.init({})
        } else {
            this.search(this.data.searchCity)
            this.setData({
                searchCity: ''
            })
        }
    },
    // 从缓存中获取从接口请求到的天气信息
    getCityDatas() {
        let cityDatas = wx.getStorage({
            key: 'cityDatas',
            success: res => {
                this.setData({
                    cityDatas: res.data
                })
            }
        })
    },
    // 设置背景和页面头部颜色
    setBcgImg(index) {
        if (index !== undefined) {
            this.setData({
                bcgImgIndex: index,
                bcgImg: this.data.bcgImgList[index].src,
                bcgColor: this.data.bcgImgList[index].topColor
            })
            this.setNavigationBarColor()
            return
        }
        wx.getStorage({
            key: 'bcgImgIndex',
            success: res => {
                let bcgImgIndex = res.data || 0
                this.setData({
                    bcgImgIndex,
                    bcgImg: this.data.bcgImgList[bcgImgIndex].src,
                    bcgColor: this.data.bcgImgList[bcgImgIndex].topColor
                })
                this.setNavigationBarColor()
            },
            fail: () => {
                this.setData({
                    bcgImgIndex: 0,
                    bcgImg: this.data.bcgImgList[0].src,
                    bcgColor: this.data.bcgImgList[0].topColor
                })
                this.setNavigationBarColor()
            }
        })
    },
    // 设置页面头颜色
    setNavigationBarColor(color) {
        let bcgColor = color || this.data.bcgColor
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: this.data.bcgColor
        })
    },
    // 选择背景
    chooseBcg(e) {
        let dataset = e.currentTarget.dataset
        let src = dataset.src
        let index = dataset.index
        this.setBcgImg(index)
        wx.setStorage({
            key: 'bcgImgIndex',
            data: index
        })
	},
	// 调用云函数
    getBroadcast(callback) {
		console.log(new Date().getHours())
        wx.cloud
            .callFunction({
                name: 'getBroadcast',
                data: {
                    hour: new Date().getHours()
                }
            })
            .then(res => {
                let data = res.result.data
                if (data) {
                    callback && callback(data[0].message)
                }
            })
    },
    reloadGetBroadcast() {
        this.getBroadcast(message => {
            this.setData({
                message
            })
        })
    },
    // 检测更新小程序-详见小程序开发指南小程序运行时章节更新机制
    checkUpdate(setting) {
        // 兼容低版本
        if (!setting.forceUpdate || !wx.getUpdateManager) {
            return
        }
        let updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(res => {
            console.error(res)
        })
        updateManager.onUpdateReady(function() {
            wx.showModal({
                title: '更新提示',
                content: '新版本已下载完成，是否重启应用？',
                success: function(res) {
                    if (res.confirm) {
                        updateManager.applyUpdate()
                    }
                }
            })
        })
    },
    // 显示选择背景模块
    showBcgImgArea() {
        this.setData({
            bcgImgAreaShow: true
        })
    },
    // 隐藏选择背景模块
    hideBcgImgArea() {
        this.setData({
            bcgImgAreaShow: false
        })
    },
    // 选择城市
    toCitychoose() {
        wx.navigateTo({
            url: '/pages/citychoose/citychoose'
        })
    },
    // 从缓存中获取系统设置并初始化
    initSetting(successFunc) {
        wx.getStorage({
            key: 'setting',
            success: res => {
                let setting = res.data || {}
                this.setData({
                    setting
                })
                successFunc && successFunc(setting)
            },
            fail: () => {
                this.setData({
                    setting: {}
                })
            }
        })
    },
    // 重载系统设置
    reloadInitSetting() {
        this.initSetting(setting => {
            this.checkUpdate(setting)
        })
    },

    menuHide() {
        if (this.data.hasPopped) {
            this.takeback()
            this.setData({
                hasPopped: false
            })
        }
	},
	// 悬浮系统设置按钮
    menuMain() {
        if (!this.data.hasPopped) {
            this.popp()
            this.setData({
                hasPopped: true
            })
        } else {
            this.takeback()
            this.setData({
                hasPopped: false
            })
        }
	},
	// 修改定位
    menuToCitychoose() {
        this.menuMain()
        wx.navigateTo({
            url: '/pages/citychoose/citychoose'
        })
	},
	// 修改系统设置
    menuToSetting() {
        this.menuMain()
        wx.navigateTo({
            url: '/pages/setting/setting'
        })
	},
	// 关于我们
    menuToAbout() {
        this.menuMain()
        wx.navigateTo({
            url: '/pages/about/about'
        })
	},
	// 菜单动画
    popp() {
        let animationMain = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        let animationOne = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        let animationTwo = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        let animationThree = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        let animationFour = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        animationMain.rotateZ(180).step()
        animationOne
            .translate(0, -60)
            .rotateZ(360)
            .opacity(1)
            .step()
        animationTwo
            .translate(-Math.sqrt(3600 - 400), -30)
            .rotateZ(360)
            .opacity(1)
            .step()
        animationThree
            .translate(-Math.sqrt(3600 - 400), 30)
            .rotateZ(360)
            .opacity(1)
            .step()
        animationFour
            .translate(0, 60)
            .rotateZ(360)
            .opacity(1)
            .step()
        this.setData({
            animationMain: animationMain.export(),
            animationOne: animationOne.export(),
            animationTwo: animationTwo.export(),
            animationThree: animationThree.export(),
            animationFour: animationFour.export()
        })
    },
    takeback() {
        let animationMain = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        let animationOne = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        let animationTwo = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        let animationThree = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        let animationFour = wx.createAnimation({
            duration: 200,
            timingFunction: 'ease-out'
        })
        animationMain.rotateZ(0).step()
        animationOne
            .translate(0, 0)
            .rotateZ(0)
            .opacity(0)
            .step()
        animationTwo
            .translate(0, 0)
            .rotateZ(0)
            .opacity(0)
            .step()
        animationThree
            .translate(0, 0)
            .rotateZ(0)
            .opacity(0)
            .step()
        animationFour
            .translate(0, 0)
            .rotateZ(0)
            .opacity(0)
            .step()
        this.setData({
            animationMain: animationMain.export(),
            animationOne: animationOne.export(),
            animationTwo: animationTwo.export(),
            animationThree: animationThree.export(),
            animationFour: animationFour.export()
        })
    }
})
