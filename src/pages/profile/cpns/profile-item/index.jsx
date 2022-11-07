import { memo } from "react";
import { View, Text } from "@tarojs/components";
import styles from "./index.module.scss";

const ProfileItem = memo(props => {
  const { name, desc } = props;
  return (
    <View className={styles["profile-item"]}>
      <Text className={styles.name}>{name}</Text>
      <Text className={styles.desc}>{desc}</Text>
    </View>
  );
});

export default ProfileItem;
