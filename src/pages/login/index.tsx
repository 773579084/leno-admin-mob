import { View, Text, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtForm, AtInput, AtButton } from "taro-ui";
import logPng from "../../assets/images/logo.png";
import "./index.scss";

function Login() {
  return (
    <View>
      <View className="at-row at-row__justify--center logo-title">
        <View className="flex-align">
          <Image
            style="width: 40px;height: 35px;background: #fff;margin-right:5px;"
            src={logPng}
          />
        </View>
        <View className="flex-align">
          <Text>leno-admin移动端登录</Text>
        </View>
      </View>
      <View className="at-row at-row__justify--center">
        <AtForm onSubmit={() => {}}>
          <AtInput
            name="value"
            title="文本"
            type="text"
            placeholder="单行文本"
            value={""}
            onChange={() => {}}
          />
          <AtInput
            name="value"
            title="文本"
            type="text"
            placeholder="单行文本"
            value={""}
            onChange={() => {}}
          />
          <View className="at-row at-row__justify--center">
            <AtInput
              name="value"
              title="文本"
              type="text"
              placeholder="单行文本"
              value={""}
              onChange={() => {}}
            />
            <Image style="width: 100px;height: 40px;" src={logPng} />
          </View>
          <AtButton formType="submit" circle type="primary">
            提交
          </AtButton>
        </AtForm>
      </View>
      <View className="at-row at-row__justify--center login-deal">
        登录即代表同意《用户协议》《隐私协议》
      </View>
    </View>
  );
}

export default Login;
