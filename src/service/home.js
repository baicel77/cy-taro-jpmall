import hyRequest from './index'


export const getHomeInfo = () => {
  return hyRequest.get('/homeinfo', {})
}

export const getRecommend = () => {
  return hyRequest.get('/recommend', {})
}


export const getGoods = (type, page) => {
  return hyRequest.post('/goods', {
    page,
    type
  })
}

