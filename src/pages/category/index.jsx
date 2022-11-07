import { memo } from 'react'
import { View } from '@tarojs/components'
import CategorySearch from "./cpns/category-search";
import styles from './index.module.scss'


const Category = memo(function() {
  return (
    <View className={styles['category']}>
      <CategorySearch></CategorySearch>
    </View>
  )
})
export default  Category
