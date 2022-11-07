import { memo } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'

const GridView = memo(function() {
  return (
    <View className={styles['grid-view']}>
      <Text>GridView</Text>
    </View>
  )
})

export default GridView
