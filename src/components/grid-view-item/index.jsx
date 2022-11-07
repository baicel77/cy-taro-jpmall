import { memo } from 'react'
import { View, Image,  Text } from '@tarojs/components'
import styles from './index.module.scss'

const GridViewItem = memo(function(props) {
  const { goodInfo } = props
  return (
    <View className={styles['grid-view-item']}>
      <Image
        className={styles['item-img']}
        mode="widthFix"
        src={goodInfo.pic_url}
      ></Image>

      <View className={styles['item-price']}>
        <Text className={styles['price']}>{goodInfo.coupon_tips}</Text>
        {
          goodInfo.logo_url &&
          <Image className={styles['logo']} src={goodInfo.logo_url} mode="widthFix"></Image>
        }
      </View>

      <View className={styles['item-title']}>
        <Text className={styles['title']}>{goodInfo.title}</Text>
        <Text className={styles['tips']}>{goodInfo.time_left}</Text>
      </View>

    </View>
  )
})

export default GridViewItem
