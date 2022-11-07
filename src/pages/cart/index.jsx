import { memo } from 'react'
import { View } from '@tarojs/components'
import EmptyCart from "./cpns/empty-cart";
import styles from './index.module.scss'

const Cart = memo(function() {
  return (
    <View className={styles['cart']}>
      <EmptyCart></EmptyCart>
    </View>
  )
})
export default Cart
