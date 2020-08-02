import {
  request
} from '../../utils/util';
Page({

  data: {
    swiperImage: [],
    catesList: [],
    floorList:[]
  },

  onLoad: function () {
    this.getSwiperMessage()
    this.getCatesList()
    this.getFloorList()
  },
  getSwiperMessage() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      method: 'GET'
    }).then(res => {
      this.setData({
        swiperImage: res.data.message
      })
    })
  },
  getCatesList(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
      method: 'GET',
    }).then( res => {
      console.log(res.data.message)
      this.setData({
        catesList: res.data.message
      })
    })
  },
  getFloorList(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
      mehtod: 'GET'
    }).then( res => {
      console.log(res.data.message)
      this.setData({floorList: res.data.message})
    })
  }
})