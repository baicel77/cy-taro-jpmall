import { memo } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'

const Detail = memo(function() {
  return (
    <View className={styles['detail']}>
      <Text>detail</Text>
    </View>
  )
})

export default Detail
