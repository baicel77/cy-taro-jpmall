import { memo } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'

const GridViewItem = memo(function() {
  return (
    <View className={styles['grid-view-item']}>
      <Text>GridViewItem</Text>
    </View>
  )
})

export default GridViewItem
