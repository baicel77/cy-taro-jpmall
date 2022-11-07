import { memo } from 'react'
import { View, Image } from '@tarojs/components'
import styles from './index.module.scss'

const Recommend = memo(function(props) {
  const { recommend } = props
  // console.log("recommend=>", recommend.ad_big_top.pic)
  return (
    <View className={styles['recommend']}>
      <Image className={styles['ad-big-top-img']} src={recommend.ad_big_top.pic} mode="widthFix"></Image>

      <View className={styles['recommend-item']}>
        <Image className={styles['ad-left']} src={recommend.ad_left.pic} mode="widthFix"></Image>

        <View className={styles['ad-right']}>
          <Image className={styles['ad-right-pic1']} src={recommend.ad_right1.pic} mode="widthFix"></Image>
          <Image className={styles['ad-right-pic2']} src={recommend.ad_right2.pic} mode="widthFix"></Image>
        </View>
      </View>

      <Image className="ad-big-top-pic" src={recommend.ad_big_bottom.pic} mode="widthFix"></Image>
      <Image className="ad-big-top-pic" src={recommend.choiceness.pic} mode="widthFix"></Image>
    </View>
  )
})

export default Recommend
