import { memo } from 'react'
import { View } from '@tarojs/components'

import styles from './index.module.scss'
import GridViewItem from '../grid-view-item'

const GridView = memo(function(props) {
  const { goods } = props

  return (
    <View className={styles['grid-view']}>
      {
        goods.map((goodInfo) => {
          return (
            <View key={goodInfo.goods_id} className={styles['item']}>
              <GridViewItem goodInfo={goodInfo}></GridViewItem>
            </View>
          )
        })
      }
    </View>
  )
})

export default GridView
