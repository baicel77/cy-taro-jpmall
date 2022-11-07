import { memo, useState } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import styles from './index.module.scss'

const TabControl = memo(function(props) {
  const { tabs, onTabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleTabClick(index) {
    setCurrentIndex(index)
    onTabClick && onTabClick(index)
  }
  return (
    <View className={styles['tab-control']}>
      {
        tabs.map((item, index) => {
          return (
            <View key={item} className={classNames(styles['tab-item'], currentIndex == index ? styles['active']: '')} onClick={() => handleTabClick(index)}>
              {item}
            </View>
          )
        })
      }
    </View>
  )
})

export default TabControl
