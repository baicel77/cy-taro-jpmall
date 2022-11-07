import { memo } from "react";
import { View, Text, Image } from "@tarojs/components";
import EmptyCartImg from "@/assets/images/empty_cart.png";
import styles from "./index.module.scss";

const EmptyCart = memo(() => {
  return (
    <View className={styles["empty-cart"]}>
      {/* 只在h5显示 */}
      {process.env.TARO_ENV === "h5" && (
        <View className={styles.title}>购物车</View>
      )}

      <View className={styles["empty-content"]}>
        <Image className={styles.cart} src={EmptyCartImg}></Image>
        <View className={styles.tip}>看到喜欢的就带回家把</View>
        <Text className={styles.recommend}>今日推荐</Text>
      </View>
    </View>
  );
});

export default EmptyCart;
