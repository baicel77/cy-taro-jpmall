import { memo, useEffect } from 'react'
import { View } from '@tarojs/components'
// import { getHomeInfo } from '@/service/home'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeInfoThunkAction, getRecommendThunkAction, getGoodsThunkAction } from '@/store/modules/home'
import TabControl from '@/components/tab-control'

import HomePopular from './cpns/home-popular'
import HomeRecommend from './cpns/home-recommend'

import  HomeSearch from './cpns/home-search/index'
import  HomeBanner from './cpns/home-banner/index'

import styles from './index.module.scss'

const Home = memo(function() {

  const banners = useSelector((state) => {
    return state.home.banners
  })
  const populars = useSelector((state) => {
    return state.home.populars
  })
  const recommend = useSelector((state) => {
    return state.home.recommend
  })
  const dispath = useDispatch()

  console.log('home-banners', banners);

  useEffect(() => {
    // getHomeInfo().then((res) => {
    //   console.log(res.data.adsInfo.slide_ads.config.slide);
    // })

    dispath(getHomeInfoThunkAction())
    dispath(getRecommendThunkAction())

    // type:0  page: 1
    dispath(getGoodsThunkAction({
      type: 0,
      page: 1
    }))
    dispath(getGoodsThunkAction({
      type: 1,
      page: 1
    }))


  }, [])

  return (
    <View className={styles['home']}>
      <HomeSearch></HomeSearch>
      <HomeBanner banners={banners}></HomeBanner>
      <HomePopular populars={populars}></HomePopular>
      {  recommend && <HomeRecommend recommend={recommend}></HomeRecommend>}
      <TabControl tabs={["精选专场", "精选单品"]}></TabControl>
    </View>
  )
})

export default  Home
