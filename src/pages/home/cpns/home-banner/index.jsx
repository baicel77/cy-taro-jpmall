import { memo } from 'react'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import PropTypes from 'proptypes'
import Taro from "@tarojs/taro";
import styles from './index.module.scss'

const HomeBanner = memo(function(props) {
  const { banners } = props
  function handleItemClick(url) {
    if (!url) return;
    Taro.navigateTo({
      url: "/pages/webview/index?link=" + url
    });
  }
  return (
    <Swiper
      className={styles['home-banner']}
      indicatorDots
      indicatorColor='#999'
      indicatorActiveColor='#ff464e'
      autoplay
      interval={3000}
    >
      {
        banners.map((item) => {
          // key.id  item.pic widthFix
          return (
            <SwiperItem key={item.id}>
              <Image className={styles['banner-img']} src={item.pic} mode="widthFix" onClick={()=>handleItemClick(item.jump_url)}></Image>
            </SwiperItem>
          )
        })
      }
    </Swiper>
  )
})

export default HomeBanner

HomeBanner.propType = {
  banners: PropTypes.array // array func object bool string  number
}
