import Taro from "@tarojs/taro";

const RouterMonitor = (props: { url: string }) => {
  const token = Taro.getStorageSync("leno-admin-mob-token");
  const { url } = props;
  const handleUrl = url.split("pages")[1]?.split("?")[0];
  let routerPath = Taro.getStorageSync("router-path");

  if (token) {
    // 有token去login 则直接返回到当前的路由
    if (handleUrl === "/login/index" || handleUrl === "/" || !handleUrl) {
      Taro.switchTab({
        url: routerPath as string,
      });
    } else {
      Taro.setStorage({
        key: "router-path",
        data: "/pages" + handleUrl,
      });
    }
  } else {
    if (handleUrl !== "/login/index" && handleUrl !== "/") {
      Taro.redirectTo({
        url: "/pages/login/index",
      });
    }
  }

  return <></>;
};

export default RouterMonitor;
