export default defineAppConfig({
  pages: [
    "pages/login/index",
    "pages/main/index/index",
    "pages/main/workbench/index",
    "pages/main/my/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: false, // 该属性默认时也可以不写
    color: "#000000",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: "pages/main/index/index",
        iconPath: "assets/images/首页.png",
        selectedIconPath: "assets/images/首页选中.png",
        text: "首页",
      },
      {
        pagePath: "pages/main/workbench/index",
        iconPath: "assets/images/工作台.png",
        selectedIconPath: "assets/images/工作台选中.png",
        text: "工作台",
      },
      {
        pagePath: "pages/main/my/index",
        iconPath: "assets/images/我的.png",
        selectedIconPath: "assets/images/我的选中.png",
        text: "我的",
      },
    ],
  },
});
