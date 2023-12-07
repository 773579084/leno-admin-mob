import { View, Button, Text } from "@tarojs/components";
import { useEffect, useState } from "react";
import NavBar from "~/components/NavBar";
import "./index.scss";

function Index() {
  return (
    <View>
      <NavBar title="我的" isLeft={false} />
      我的
    </View>
  );
}

export default Index;
