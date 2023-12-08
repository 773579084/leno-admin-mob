import { View, Image } from "@tarojs/components";
import "./index.scss";
import logPng from "~/assets/images/logo.png";

function Index() {
  return (
    <View className="index">
      <View className="flex-center">
        <Image
          style="width: 100px;height: 90px;margin: 100px 0 20px;"
          src={logPng}
        />
      </View>
      <View className="flex-center font"> Hello LenoAdmin</View>
    </View>
  );
}

export default Index;
