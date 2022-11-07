import { memo, useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { getProfileInfo } from "@/service/profile";
import { useLoad } from "@tarojs/taro";

import styles from "./index.module.scss";

import LoginPanel from "./cpns/login-panel";
import OrderInfo from "./cpns/order-info";
import ProfileItem from "./cpns/profile-item";

const Profile = memo(() => {
  // 这个json可以从网络上获取
  const [profileItem1, setProfileItem1] = useState([]);
  const [profileItem2, setProfileItem2] = useState([]);

  useLoad(() => {
    console.log("useLoad");
    getProfileInfo().then(res => {
      setProfileItem1(res.data.item1);
      setProfileItem2(res.data.item2);
    });
  });

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <View className={styles.profile}>
      {/* 注册和登录 */}
      <LoginPanel></LoginPanel>
      {/* 我的订单 */}
      <OrderInfo></OrderInfo>
      <View className={styles.line20}></View>
      {profileItem1.map(item => {
        return (
          <ProfileItem
            key={item.id}
            name={item.name}
            desc={item.desc}
          ></ProfileItem>
        );
      })}
      <View className={styles.line20}></View>
      {profileItem2.map(item => {
        return (
          <ProfileItem
            key={item.id}
            name={item.name}
            desc={item.desc}
          ></ProfileItem>
        );
      })}
      <View className={styles.line20}></View>
    </View>
  );
});

export default Profile;
