import { memo } from 'react'
import { View, Image } from '@tarojs/components'
import PropTypes from 'proptypes'
import Taro from "@tarojs/taro";
import styles from './index.module.scss'

const HomePopular = memo(function(props) {
  const { populars } = props
  function handlePopularClick(url) {
    if (!url) return;
    Taro.navigateTo({
      url: "/pages/webview/index?link=" + url
    });
  }

  return (
    <View className={styles['home-popular']}>
      {
        populars.map((item) => {
          // key.id  item.pic  widthFix
          return (
            <Image key={item.id} className={styles['popular-img']} src={item.pic} mode="widthFix" onClick={() => handlePopularClick(item.link)}></Image>
          )
        })
      }
    </View>
  )
})

export default HomePopular
HomePopular.propTypes = {
  populars: PropTypes.array
}
