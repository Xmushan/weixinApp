import {request} from '../../utils/util'
Page({

  data: {
    category: [],
    //左侧数据
    leftMessage: [],
    //右侧数据
    rightMessage: [],
    currentIndex: 0
  },
  onLoad: function (options) {
    this.getCategory()
  },
  getCategory(){
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
      method: 'GET'
    }).then( res => {
      let {currentIndex} = this.data
      this.setData({category: res.data.message})
      let leftMessage = this.data.category.map( item => (item.cat_name) )
      let rightMessage = this.data.category[currentIndex].children
      this.setData({
        leftMessage,
        rightMessage
      })
    })
  },
  handleItemTap(e){
    let {index} = e.currentTarget.dataset
    let rightMessage = this.data.category[index].children
    this.setData({
      rightMessage,
      currentIndex: index
    })
  }
})