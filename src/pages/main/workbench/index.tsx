import { View } from "@tarojs/components";
import { useState } from "react";
import { AtGrid, AtToast } from "taro-ui";
import NavBar from "~/components/NavBar";
import "./index.scss";

function Index() {
  const [toast, setToast] = useState(false);

  return (
    <View className="workbench">
      <NavBar title="工作台" isLeft={false} />
      <View>
        <View className="grid-title">系统管理</View>
        <AtGrid
          onClick={() => {
            setToast(true);
          }}
          hasBorder={false}
          columnNum={4}
          data={[
            {
              iconInfo: {
                value: "user",
                size: 30,
                color: "#6190e8",
              },
              value: "用户管理",
            },
            {
              iconInfo: {
                value: "jiaosequnti",
                prefixClass: "iconfont",
                size: 30,
                color: "#6190e8",
              },
              value: "角色管理",
            },
            {
              iconInfo: {
                value: "heart-2",
                size: 30,
                color: "#6190e8",
              },
              value: "岗位管理",
            },
            {
              iconInfo: {
                value: "message",
                size: 30,
                color: "#6190e8",
              },
              value: "通知公告",
            },
            {
              iconInfo: {
                prefixClass: "iconfont",
                value: "rizhiguanli",
                size: 30,
                color: "#6190e8",
              },
              value: "操作日志",
            },
            {
              iconInfo: {
                value: "bullet-list",
                size: 30,
                color: "#6190e8",
              },
              value: "登录日志",
            },
          ]}
        />
      </View>
      <AtToast
        isOpened={toast}
        onClose={() => {
          setToast(false);
        }}
        text="模块建设中~"
      ></AtToast>
    </View>
  );
}

export default Index;
