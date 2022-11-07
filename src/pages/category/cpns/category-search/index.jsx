// import React, { useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import SearchIcon from "@/assets/images/category/cate-search.png";
import styles from "./index.module.scss";

// console.log(styles);
function CategorySearch() {
  function handleItemClick(e) {
    console.log(e);
  }
  return (
    <View className={styles["category-search"]} onClick={handleItemClick}>
      <Image className={styles["search-icon"]} src={SearchIcon} />
      <Text className={styles.name}>搜索商品</Text>
    </View>
  );
}

export default CategorySearch;
