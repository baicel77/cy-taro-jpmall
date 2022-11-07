import { memo, useEffect } from 'react'
import { View } from '@tarojs/components'
import { useSelector, useDispatch } from 'react-redux'
import { useReachBottom, useLoad } from '@tarojs/taro'
import { getHomeInfoThunkAction, getRecommendThunkAction, getGoodsThunkAction, setCurrentTab , tabs } from '@/store/modules/home'
import TabControl from '@/components/tab-control'
import GridView from '@/components/grid-view'
import HomePopular from './cpns/home-popular'
import HomeRecommend from './cpns/home-recommend'

import  HomeSearch from './cpns/home-search/index'
import  HomeBanner from './cpns/home-banner/index'

import styles from './index.module.scss'



const Home = memo(function() {

  // 从 redux store 中读取数据
  const  { banners, populars, recommend , currentTab, goodsList } = useSelector((state) => {
    return {
      banners: state.home.banners,
      populars: state.home.populars,
      recommend: state.home.recommend,
      currentTab: state.home.currentTab,
      goodsList: state.home.goodsList,
    }
  })

  const dispath = useDispatch()

  // 页面加载时开发发起网络请求
  useLoad(() => {
    dispath(getHomeInfoThunkAction())
    dispath(getRecommendThunkAction())
    // type:0  page: 1
    dispath(getGoodsThunkAction({type: 0, page: 1}))
    dispath(getGoodsThunkAction({type: 1, page: 1}))
  })

  useEffect(() => {
    console.log('useEffect');
  }, [])

  useReachBottom(() => {
    // currentTab = specific  single
    const currentType = currentTab === tabs[0] ? 0: 1
    const nextPage = goodsList[currentTab].page + 1
    dispath(getGoodsThunkAction({type: currentType, page: nextPage}))
  })

  function hadnleTabClick(index) {
    // 切换显示
    dispath(setCurrentTab(tabs[index]))
  }

  return (
    <View className={styles['home']}>
      <HomeSearch></HomeSearch>
      <HomeBanner banners={banners}></HomeBanner>
      <HomePopular populars={populars}></HomePopular>
      {  recommend && <HomeRecommend recommend={recommend}></HomeRecommend>}
      <TabControl tabs={["精选专场", "精选单品"]} onTabClick={hadnleTabClick}></TabControl>
      <GridView goods={goodsList[currentTab].list}></GridView>
    </View>
  )
})

export default  Home
