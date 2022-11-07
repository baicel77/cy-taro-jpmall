import { memo } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'

const Profile = memo(function() {
  return (
    <View className={styles['profile']}>
      <Text>profile</Text>
    </View>
  )
})

export default  Profile
