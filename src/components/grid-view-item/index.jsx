import { memo } from 'react'
import { View, Image,  Text } from '@tarojs/components'
import styles from './index.module.scss'

const GridViewItem = memo(function(props) {
  const { goodInfo, onItemClick } = props

  function handleItemClick() {
    onItemClick && onItemClick(goodInfo)
  }
  return (
    <View className={styles['grid-view-item']} onClick={handleItemClick}>
      <Image
        className={styles['item-img']}
        mode="widthFix"
        src={goodInfo.pic_url}
      ></Image>

      <View className={styles['item-price']}>
        {
          goodInfo.coupon_tips &&
          <Text className={styles['price']}>{goodInfo.coupon_tips}</Text>
        }
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
