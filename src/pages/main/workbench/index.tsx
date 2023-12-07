import { View, Button, Text } from "@tarojs/components";
import { useEffect, useState } from "react";
import NavBar from "~/components/NavBar";
import "./index.scss";

function Index() {
  return (
    <View>
      <NavBar title="工作台" isLeft={false} />
      工作台
    </View>
  );
}

export default Index;
