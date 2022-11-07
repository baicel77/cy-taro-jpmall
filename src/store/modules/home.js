import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeInfo, getRecommend, getGoods } from '@/service/home'

export const getHomeInfoThunkAction = createAsyncThunk('home/info', async () => {
  const res = await getHomeInfo()
  return res.data
})
export const getRecommendThunkAction = createAsyncThunk('home/recommend', async () => {
  const res = await getRecommend()
  return res.data
})
export const getGoodsThunkAction = createAsyncThunk('home/goods', async (payload) => {
  console.log("payload=>", payload);
  const { type, page} = payload
  const res = await getGoods(type, page)
  return {
    goods: res.data.goods,
    page,
    type
  }
})
export const tabs = ["specific", "single"]; // 0 1

function getDefaultGoodsList() {
  const goodsListOrigin = {};
  tabs.forEach(tab => {
    // { "精选专场": { page:0, list:[] } }
    goodsListOrigin[tab] = { page: 0, list: [] };
  });
  return goodsListOrigin
}

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    populars: [],
    recommend: null,
    goodsList: getDefaultGoodsList()
    // goodsList: {
    //   "精选专场": {
    //     page: 0,
    //     list: []
    //   },
    //   "精选单品": {
    //     page: 0,
    //     list: []
    //   }
    // }
  },
  reducers: {
    // getHomeInfo(state, action){
    //   const { payload } = action
    //   state.banners = payload
    // },
    // getRecommend(state, action){
    //   const { payload } = action
    //   state.recommend = payload
    // },
    // getGoods(state, action){
    //   const { payload } = action
    //   state.goodsList = payload
    // },
  },
  extraReducers: {
    [getHomeInfoThunkAction.fulfilled](state, action) {
      const { payload } = action
      state.banners = payload.adsInfo.slide_ads.config.slide || []
    },
    [getRecommendThunkAction.fulfilled](state, action) {
      const { payload } = action
      state.populars = payload.populars || []
      state.recommend = payload.recommend || {}
    },
    [getGoodsThunkAction.fulfilled](state, action) {
      const { payload } = action
      if(payload.goods && payload.goods.length){
        // todo ....
        const {type, page, goods } = payload
        state.goodsList[tabs[type]].list = [...state.goodsList[tabs[type]].list, ...goods]
        state.goodsList[tabs[type]].page = page
      }

    }
  }
})

// export const { getHomeInfo, getRecommend, getGoods } = homeSlice.actions
export default homeSlice.reducer
