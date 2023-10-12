import { View, Text, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import logPng from "../../assets/images/logo.png";

function Login() {
  return (
    <View className="at-row">
      <View className="at-col">
        <Image
          style="width: 60px;height: 50px;background: #fff;"
          src={logPng}
        />
      </View>
      <View className="at-col">
        <Text>leno-admin移动端登录</Text>
      </View>
    </View>
  );
}

export default Login;
