import { memo } from "react";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

const LoginPanel = memo(() => {
  return (
    <View className={styles["login-panel"]}>
      {/* 只在h5显示 */}
      {process.env.TARO_ENV === "h5" && (
        <View className={styles.title}>个人中心</View>
      )}
      <View className={styles.panel}>
        <Text className={styles.register}>注册</Text>
        <Text className={styles.line}></Text>
        <Text className={styles.login}>登录</Text>
      </View>
    </View>
  );
});

export default LoginPanel;
