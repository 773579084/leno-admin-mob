import { View, Image } from "@tarojs/components";
import { useState } from "react";
import { AtAvatar, AtList, AtListItem, AtToast } from "taro-ui";
import NavBar from "~/components/NavBar";
import "./index.scss";
import github from "~/assets/images/github.png";
import guanzhu from "~/assets/images/关注.png";
import wendang from "~/assets/images/文档.png";
import people from "~/assets/images/人工成本.png";
import useStore from "~/store";
import Taro from "@tarojs/taro";

function My() {
  const {
    useUserStore: { userInfo },
  } = useStore();
  const [qq, setQq] = useState(false);
  const [ava, setAva] = useState(false);

  return (
    <View className="index">
      <NavBar title="我的" isLeft={false} />
      <View className="top">
        <View className="user">
          <View className="user">
            <View
              onClick={() => {
                if (process.env.TARO_ENV === "h5") {
                  Taro.navigateTo({
                    url: "/pages/main/my/myPage/avatar/index",
                  });
                }
                if (process.env.TARO_ENV === "weapp") {
                  setAva(true);
                }
              }}
            >
              <AtAvatar circle image={userInfo.avatar} />
            </View>
            <View className="user-name">用户名：{userInfo.userName}</View>
          </View>
          <View
            className="angle-info"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/main/my/myPage/info/index",
              });
            }}
          >
            个人信息 {`>`}
          </View>
        </View>
        <View className="bottom">
          <View className="bottom-one">
            <View className="card" onClick={() => setQq(true)}>
              <Image className="icon" src={people} />
              交流群
            </View>

            <View
              className="card"
              onClick={() => {
                if (process.env.TARO_ENV === "h5") {
                  window.open(
                    "https://github.com/773579084/Leno_Admin",
                    "_blank"
                  );
                }
                if (process.env.TARO_ENV === "weapp") {
                  Taro.showToast({
                    title: "功能建设中~",
                    icon: "error",
                  });
                }
              }}
            >
              <Image className="icon" src={github} />
              Github
            </View>
            <View
              className="card"
              onClick={() => {
                if (process.env.TARO_ENV === "h5") {
                  window.open(
                    "https://zhao-wenchao110.gitee.io/lenoadmin-docs/#/",
                    "_blank"
                  );
                }
                if (process.env.TARO_ENV === "weapp") {
                  Taro.showToast({
                    title: "功能建设中~",
                    icon: "error",
                  });
                }
              }}
            >
              <Image className="icon" src={wendang} />
              技术文档
            </View>
            <View
              className="card"
              onClick={() => {
                if (process.env.TARO_ENV === "h5") {
                  window.open(
                    "https://juejin.cn/user/1610152057789582/posts",
                    "_blank"
                  );
                }
                if (process.env.TARO_ENV === "weapp") {
                  Taro.showToast({
                    title: "功能建设中~",
                    icon: "error",
                  });
                }
              }}
            >
              <Image className="icon" src={guanzhu} />
              关注作者
            </View>
          </View>
          <View className="bottom-two">
            <AtList>
              <AtListItem
                title="编辑资料"
                arrow="right"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/main/my/myPage/editInfo/index",
                  });
                }}
                iconInfo={{ size: 25, color: "#78A4FA", value: "user" }}
              />

              <AtListItem
                title="常见问题"
                arrow="right"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/main/my/myPage/help/index",
                  });
                }}
                iconInfo={{ size: 25, color: "#78A4FA", value: "help" }}
              />

              <AtListItem
                title="关于我们"
                arrow="right"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/main/my/myPage/about/index",
                  });
                }}
                iconInfo={{ size: 25, color: "#78A4FA", value: "heart" }}
              />

              <AtListItem
                title="应用设置"
                arrow="right"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/main/my/myPage/setting/index",
                  });
                }}
                iconInfo={{ size: 25, color: "#78A4FA", value: "settings" }}
              />
            </AtList>
          </View>
        </View>
      </View>

      <AtToast
        isOpened={qq}
        text="交流QQ群：913365274"
        onClose={() => setQq(false)}
      />
      <AtToast
        isOpened={ava}
        text="微信小程序暂不支持更换头像"
        onClose={() => setAva(false)}
      />
    </View>
  );
}

export default My;
