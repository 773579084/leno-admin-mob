export default defineAppConfig({
  pages: [
    "pages/login/index",
    "pages/common/webview/index",
    "pages/main/index/index",
    "pages/main/workbench/index",
    "pages/main/my/index",
    "pages/main/my/myPage/info/index",
    "pages/main/my/myPage/about/index",
    "pages/main/my/myPage/editInfo/index",
    "pages/main/my/myPage/help/index",
    "pages/main/my/myPage/setting/index",
    "pages/main/my/myPage/avatar/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    // 控制底部bar是否显示 true隐藏
    custom: false,
    color: "#000000",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: "pages/main/index/index",
        iconPath: "assets/images/index.png",
        selectedIconPath: "assets/images/indexselect.png",
        text: "首页",
      },
      {
        pagePath: "pages/main/workbench/index",
        iconPath: "assets/images/gongzuotai.png",
        selectedIconPath: "assets/images/gongzuotaixuanzhong.png",
        text: "工作台",
      },
      {
        pagePath: "pages/main/my/index",
        iconPath: "assets/images/my.png",
        selectedIconPath: "assets/images/myselect.png",
        text: "我的",
      },
    ],
  },
  animation: {
    // 动画切换时间，单位毫秒
    duration: 50, // 动画切换时间，单位毫秒
    delay: 50,
  },
});
