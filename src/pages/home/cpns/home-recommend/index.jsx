import { memo } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from "@tarojs/taro";
import styles from './index.module.scss'

const Recommend = memo(function(props) {
  const { recommend } = props
  // console.log("recommend=>", recommend.ad_big_top.pic)
  function handleItemClick(url) {
    if (!url) return;
    Taro.navigateTo({
      url: "/pages/webview/index?link=" + url
    });
  }
  return (
    <View className={styles['recommend']}>
      <Image className={styles['ad-big-top-pic']} src={recommend.ad_big_top.pic} mode="widthFix" onClick={() => handleItemClick(recommend.ad_big_top.link)}></Image>

      <View className={styles['recommend-item']}>
        <Image className={styles['ad-left']} src={recommend.ad_left.pic} mode="widthFix" onClick={() => handleItemClick(recommend.ad_left.link)}></Image>

        <View className={styles['ad-right']}>
          <Image className={styles['ad-right-pic1']} src={recommend.ad_right1.pic} mode="widthFix" onClick={() => handleItemClick(recommend.ad_right1.link)}></Image>
          <Image className={styles['ad-right-pic2']} src={recommend.ad_right2.pic} mode="widthFix" onClick={() => handleItemClick(recommend.ad_right2.link)}></Image>
        </View>
      </View>

      <Image className="ad-big-top-pic" src={recommend.ad_big_bottom.pic} mode="widthFix"  onClick={() => handleItemClick(recommend.ad_big_bottom.link)}></Image>
      <Image className="ad-big-top-pic" src={recommend.choiceness.pic} mode="widthFix" onClick={() => handleItemClick(recommend.choiceness.link)}></Image>
    </View>
  )
})

export default Recommend
