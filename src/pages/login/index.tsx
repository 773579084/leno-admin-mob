import { ILogin } from "@/types/user";
import { View, Text, Image } from "@tarojs/components";
import { useState } from "react";
import { AtForm, AtInput, AtButton, AtIcon } from "taro-ui";
import logPng from "../../assets/images/logo.png";
import "./index.scss";

function Login() {
  const [login, setLogin] = useState({
    userName: "admin",
    password: "123456",
    code: "",
    uuid: "",
  } as ILogin);

  const onSubmit = () => {
    console.log(17, login);
  };

  return (
    <View>
      <View className="at-row at-row__justify--center logo-title">
        <View className="flex-align">
          <Image
            style="width: 40px;height: 35px;background: #fff;margin-right:10px;"
            src={logPng}
          />
        </View>
        <View className="flex-align">
          <Text>leno-admin</Text>
        </View>
      </View>

      <AtForm className="login-form" onSubmit={onSubmit}>
        <AtInput
          name="value"
          required
          border={false}
          // title={<AtIcon value="user" size="30" color="#999999" />}
          type="text"
          placeholder="请输入账号"
          value={login.userName}
          onChange={() => {}}
        ></AtInput>
        <AtInput
          name="value"
          required
          border={false}
          // title={<AtIcon value="lock" size="30" color="#999999" />}
          type="password"
          placeholder="请输入密码"
          value={login.password}
          onChange={() => {}}
        />
        <View className="at-row at-row__justify--center">
          <AtInput
            name="value"
            required
            border={false}
            // title={<AtIcon value="bell" size="30" color="#999999" />}
            type="text"
            placeholder="请输入验证码"
            value={login.code}
            onChange={() => {}}
          >
            <Image style="width: 100px;height: 40px;" src={logPng} />
          </AtInput>
        </View>
        <AtButton formType="submit" circle type="primary">
          登录
        </AtButton>
      </AtForm>

      <View className="at-row at-row__justify--center login-deal">
        登录即代表同意 <Text style={{ color: "#0081ff" }}>《用户协议》</Text>
        <Text style={{ color: "#0081ff" }}>《隐私协议》</Text>
      </View>

      <AtButton circle type="primary">
        测试
      </AtButton>
    </View>
  );
}

export default Login;
