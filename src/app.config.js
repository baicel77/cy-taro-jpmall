export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/category/index',
    'pages/cart/index',
    'pages/profile/index',
    'pages/detail/index',
    'pages/webview/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ff464e',
    navigationBarTitleText: '弘源卷皮',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: "#999",
    selectedColor: "#ff464e",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "assets/images/tabbar/home.png",
        selectedIconPath: "assets/images/tabbar/home_active.png"
      },
      {
        pagePath: "pages/category/index",
        text: "分类",
        iconPath: "assets/images/tabbar/category.png",
        selectedIconPath: "assets/images/tabbar/category_active.png"
      },
      {
        pagePath: "pages/cart/index",
        text: "购物车",
        iconPath: "assets/images/tabbar/cart.png",
        selectedIconPath: "assets/images/tabbar/cart_active.png"
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "assets/images/tabbar/profile.png",
        selectedIconPath: "assets/images/tabbar/profile_active.png"
      }
    ]
  }
})
