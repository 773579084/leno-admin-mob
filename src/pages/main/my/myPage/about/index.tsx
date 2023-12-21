import { View, Image } from "@tarojs/components";
import NavBar from "~/components/NavBar";
import logPng from "~/assets/images/logo.png";
import "./index.scss";
import { AtList, AtListItem } from "taro-ui";

function Index() {
  return (
    <View className="about">
      <NavBar title="关于我们" />
      <View className="flex-center">
        <Image
          style="width: 90px;height: 80px;margin: 20px 0 20px;"
          src={logPng}
        />
      </View>
      <View className="flex-center"> LenoAdmin移动端</View>
      <AtList className="list">
        <AtListItem title="版本信息" extraText="v1.0.0" />
        <AtListItem title="官方邮箱" extraText="lenoadmin@xx.com" />
        <AtListItem title="服务热线" extraText="999-999-9999" />
        <AtListItem
          title="公司网站"
          extraText="https://github.com/773579084/Leno_Admin"
        />
      </AtList>
      <View className="bottom-desc">
        Copyright © 2023 zhaowenchao.top All Rights Reserved
      </View>
    </View>
  );
}

export default Index;
