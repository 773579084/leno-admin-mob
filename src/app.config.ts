export default defineAppConfig({
  pages: ["pages/login/index", "pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: false, // 该属性默认时也可以不写
    color: "#000000",
    selectedColor: "#A4462A",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "",
        selectedIconPath: "",
        text: "首页",
      },
      {
        pagePath: "pages/login/index",
        iconPath: "",
        selectedIconPath: "",
        text: "登录",
      },
    ],
  },
});
