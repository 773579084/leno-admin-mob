import { View } from "@tarojs/components";
import NavBar from "~/components/NavBar";
import { AtAccordion, AtCard } from "taro-ui";
import "./index.scss";
import github from "~/assets/images/github.png";
import guanzhu from "~/assets/images/关注.png";
import { useState } from "react";

function Index() {
  const [issue, setIssue] = useState({
    github1: false,
    github2: false,
    other1: false,
    other2: false,
    other3: false,
  });

  return (
    <View className="help">
      <NavBar title="常见问题" />

      <AtCard title="LenoAdmin问题" thumb={github} className="issue">
        <AtAccordion
          open={issue.github1}
          onClick={(value) => {
            setIssue({ ...issue, github1: value });
          }}
          title="lenoadmin可以开源嘛?"
        >
          <View className="show-content">可以</View>
        </AtAccordion>
        <AtAccordion
          open={issue.github2}
          onClick={(value) => {
            setIssue({ ...issue, github2: value });
          }}
          title="lenoadmin可以商用嘛?"
        >
          <View className="show-content">可以</View>
        </AtAccordion>
      </AtCard>
      <AtCard title="其他问题" thumb={guanzhu} className="issue">
        <AtAccordion
          open={issue.other1}
          onClick={(value) => {
            setIssue({ ...issue, other1: value });
          }}
          title="如何退出登录?"
        >
          <View className="show-content">
            点击[我的] - [应用设置] - [退出登录] 即可退出登录账号
          </View>
        </AtAccordion>
        <AtAccordion
          open={issue.other2}
          onClick={(value) => {
            setIssue({ ...issue, other2: value });
          }}
          title="如何修改用户头像?"
        >
          <View className="show-content">
            点击[我的] - [选择头像] - [点击提交] 即可更换头像
          </View>
        </AtAccordion>
        <AtAccordion
          open={issue.other3}
          onClick={(value) => {
            setIssue({ ...issue, other3: value });
          }}
          title="如何修改登录密码?"
        >
          <View className="show-content">
            点击[我的] - [应用设置] - [修改密码] 即可修改密码
          </View>
        </AtAccordion>
      </AtCard>
    </View>
  );
}

export default Index;
