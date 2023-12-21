import Taro from "@tarojs/taro";
import { getUserAPI } from "~/api/modules/user";
import useStore from "~/store";

const RouterMonitor = (props: { url: string }) => {
  const {
    useUserStore: { userInfo, setUserInfo },
  } = useStore();
  const token = Taro.getStorageSync("leno-admin-mob-token");
  const { url } = props;
  const handleUrl = url.split("pages")[1]?.split("?")[0];
  let routerPath = Taro.getStorageSync("router-path");

  if (token) {
    // 有token 判断是否有userinfo
    if (Object.keys(userInfo).length === 0) {
      // 对象为空
      (async () => {
        try {
          const res = await getUserAPI();
          setUserInfo(res.data.result);
        } catch (error) {}
      })();
    }

    // 有token去login
    if (handleUrl === "/login/index" || handleUrl === "/" || !handleUrl) {
      console.log(28, routerPath);

      Taro.redirectTo({
        url: routerPath as string,
      });
    } else {
      Taro.setStorage({
        key: "router-path",
        data: "/pages" + handleUrl,
      });
    }
  } else {
    if (
      handleUrl !== "/login/index" &&
      handleUrl !== "/" &&
      handleUrl !== "/common/webview/index"
    ) {
      Taro.redirectTo({
        url: "/pages/login/index",
      });
    }
  }

  return <></>;
};

export default RouterMonitor;
