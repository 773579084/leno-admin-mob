import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtAvatar, AtIcon } from "taro-ui";
import NavBar from "~/components/NavBar";
import "./index.scss";

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
              <AtIcon
                value="rengongchengben"
                size="30"
                prefixClass="iconfont"
              />
              交流群
            </View>
            <View className="card">
              <AtIcon value="github" size="30" prefixClass="iconfont" />
              Github
            </View>
            <View className="card">
              <AtIcon value="wendang" size="30" prefixClass="iconfont" />
              技术文档
            </View>
            <View className="card">
              <AtIcon value="guanzhu" size="30" prefixClass="iconfont" />
              关注作者
            </View>
          </View>
          <View className="bottom-two">2-2</View>
        </View>
      </View>
    </View>
  );
}

export default My;
