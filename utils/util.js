const request = (params) => {
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        resolve(res)
      },
      fail: err => (reject(err))
    })
  })
}

export {request}