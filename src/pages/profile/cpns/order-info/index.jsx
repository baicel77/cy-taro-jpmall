import { memo } from "react";
import { View, Text, Image } from "@tarojs/components";

import WaitPay from "@/assets/images/profile/wait-pay.svg";
import WaitTake from "@/assets/images/profile/wait-take.svg";
import WaitTogether from "@/assets/images/profile/wait-together.svg";
import Refund from "@/assets/images/profile/refund.svg";
import styles from "./index.module.scss";

const OrderInfo = memo(() => {
  const orderItems = [
    {
      id: 0,
      icon: WaitPay,
      name: "待付款"
    },
    {
      id: 1,
      icon: WaitTake,
      name: "待成团"
    },
    {
      id: 2,
      icon: WaitTogether,
      name: "待收货"
    },
    {
      id: 3,
      icon: Refund,
      name: "退款/售后"
    }
  ];
  return (
    <View className={styles["order-info"]}>
      {/* 我的订单 */}
      <View className={styles["title-bar"]}>
        <Text className={styles.name}>我的订单</Text>
        <Text className={styles.subname}>全部订单</Text>
      </View>
      <View className={styles["order-item"]}>
        {orderItems.map(item => {
          return (
            <View key={item.id} className={styles["item"]}>
              <Image
                className={styles["item-icon"]}
                src={item.icon}
                mode="widthFix"
              ></Image>
              <Text className={styles["item-name"]} mode="widthFix">
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
});

export default OrderInfo;
