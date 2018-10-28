// components/swiper/swiper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        img: Array
    },

    /**
     * 组件的初始数据
     */
    data: {
        img: [],
        current: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        swiperChange(e) {
            this.setData({
                current: e.detail.current
            });
            this.triggerEvent('swiperChange', e.detail.current)
        }
    }
})