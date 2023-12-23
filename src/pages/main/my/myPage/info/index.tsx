import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtList, AtListItem } from "taro-ui";
import NavBar from "~/components/NavBar";
import useStore from "~/store";
import "./index.scss";

function Index() {
  const [roles, setRoles] = useState("");
  const {
    useUserStore: { userInfo },
  } = useStore();

  useEffect(() => {
    userInfo.roles?.forEach((item) => {
      setRoles(item.roleName + `${roles ? "," : ""}` + roles);
    });
  }, [userInfo]);

  return (
    <View className="info">
      <NavBar title="个人信息" />
      <AtList>
        <AtListItem
          title="昵称"
          extraText={userInfo.nickName}
          iconInfo={{ size: 20, color: "#78A4FA", value: "user" }}
        />
        <AtListItem
          title="手机号码"
          extraText={userInfo.phonenumber}
          iconInfo={{ size: 20, color: "#78A4FA", value: "phone" }}
        />
        <AtListItem
          title="邮箱"
          extraText={userInfo.email}
          iconInfo={{ size: 20, color: "#78A4FA", value: "mail" }}
        />
        <AtListItem
          title="部门"
          extraText={userInfo.dept?.deptName}
          iconInfo={{
            size: 20,
            color: "#78A4FA",
            prefixClass: "iconfont",
            value: "yonghu",
          }}
        />
        <AtListItem
          title="角色"
          extraText={roles}
          iconInfo={{
            size: 20,
            color: "#78A4FA",
            prefixClass: "iconfont",
            value: "jiaosequnti",
          }}
        />
        <AtListItem
          title="创建日期"
          extraText={userInfo.createdAt}
          iconInfo={{ size: 20, color: "#78A4FA", value: "calendar" }}
        />
      </AtList>
    </View>
  );
}

export default Index;
