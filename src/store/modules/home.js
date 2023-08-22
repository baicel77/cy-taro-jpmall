import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeInfo, getRecommend, getGoods } from '@/service/home'

// 异步的action
export const getHomeInfoThunkAction = createAsyncThunk('home/info', async () => {
  const res = await getHomeInfo()
  return res.data
})
export const getRecommendThunkAction = createAsyncThunk('home/recommend', async () => {
  const res = await getRecommend()
  return res.data
})
// eslint-disable-next-line no-unused-vars
export const getGoodsThunkAction = createAsyncThunk('home/goods', async (payload, { dispatch, getState }) => {
  // console.log("payload=>", payload);
  // console.log(dispatch);
  // console.log(getState().home);  // 拿到当前home模块的state
  const { type, page} = payload
  const res = await getGoods(type, page)
  // 返回具体信息
  return {
    goods: res.data.goods,
    page,
    type
  }
})

// 选项卡字符串
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
    recommend: null, // 这个默认值为null，使用时需要判断
    currentTab: tabs[0], // specific  single
    goodsList: getDefaultGoodsList()
    // goodsList: {
    //   "specific": { // 精选专场
    //     page: 0,
    //     list: []
    //   },
    //   "single": {  // 精选单品
    //     page: 0,
    //     list: []
    //   }
    // }
  },
  reducers: {
    setCurrentTab(state, { payload }) {
      state.currentTab = payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getHomeInfoThunkAction.fulfilled, (state, action)=>{
      const { payload } = action
      state.banners = payload.adsInfo.slide_ads.config.slide || []
    })

    .addCase(getRecommendThunkAction.fulfilled, (state, action) => {
      const { payload } = action
      state.populars = payload.populars || []
      state.recommend = payload.recommend || null
    })

    .addCase(getGoodsThunkAction.fulfilled, (state, action) => {
      const { payload } = action
      // 判空在操作
      if(payload.goods && payload.goods.length){
        const {type, page, goods } = payload
        // 直接修改 page 和 list
        state.goodsList[tabs[type]].list = [...state.goodsList[tabs[type]].list, ...goods]
        state.goodsList[tabs[type]].page = page
      }
    })
  },

  // 下面的写法将在 RTK 2.0以后过期
  // extraReducers: {
  //   [getHomeInfoThunkAction.fulfilled](state, action) {
  //     const { payload } = action
  //     state.banners = payload.adsInfo.slide_ads.config.slide || []
  //   },
  //   [getRecommendThunkAction.fulfilled](state, action) {
  //     const { payload } = action
  //     state.populars = payload.populars || []
  //     state.recommend = payload.recommend || {}
  //   },
  //   [getGoodsThunkAction.fulfilled](state, action) {
  //     const { payload } = action
  //     // 判空在操作
  //     if(payload.goods && payload.goods.length){
  //       const {type, page, goods } = payload
  //       // 直接修改 page 和 list
  //       state.goodsList[tabs[type]].list = [...state.goodsList[tabs[type]].list, ...goods]
  //       state.goodsList[tabs[type]].page = page
  //     }
  //   }
  // }
})
// 同步的action
export const { setCurrentTab } = homeSlice.actions
export default homeSlice.reducer
