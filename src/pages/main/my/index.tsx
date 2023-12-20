import { View, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtAvatar, AtIcon, AtList, AtListItem } from "taro-ui";
import NavBar from "~/components/NavBar";
import "./index.scss";
import github from "~/assets/images/github.png";
import guanzhu from "~/assets/images/关注.png";
import wendang from "~/assets/images/文档.png";
import people from "~/assets/images/人工成本.png";

function My() {
  return (
    <View className="index">
      <NavBar title="我的" isLeft={false} />
      <View className="top">
        <View className="user">
          <View className="user">
            <AtAvatar circle />
            <View className="user-name">用户名：admin</View>
          </View>
          <View className="angle-info">个人信息 {`>`}</View>
        </View>
        <View className="bottom">
          <View className="bottom-one">
            <View className="card">
              <Image className="icon" src={people} />
              交流群
            </View>
            <View className="card">
              <Image className="icon" src={github} />
              Github
            </View>
            <View className="card">
              <Image className="icon" src={wendang} />
              技术文档
            </View>
            <View className="card">
              <Image className="icon" src={guanzhu} />
              关注作者
            </View>
          </View>
          <View className="bottom-two">
            <AtList>
              <AtListItem
                title="编辑资料"
                arrow="right"
                iconInfo={{ size: 25, color: "#78A4FA", value: "user" }}
              />

              <AtListItem
                title="常见问题"
                arrow="right"
                iconInfo={{ size: 25, color: "#78A4FA", value: "help" }}
              />

              <AtListItem
                title="关于我们"
                arrow="right"
                iconInfo={{ size: 25, color: "#78A4FA", value: "heart" }}
              />

              <AtListItem
                title="应用设置"
                arrow="right"
                iconInfo={{ size: 25, color: "#78A4FA", value: "settings" }}
              />
            </AtList>
          </View>
        </View>
      </View>
    </View>
  );
}

export default My;
