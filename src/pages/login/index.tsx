import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import { AtForm, AtInput, AtButton, AtIcon } from "taro-ui";
import logPng from "~/assets/images/logo.png";
import "./index.scss";
import { captchaImageAPI } from "~/api/modules/user";
import { IcaptchaImageType, ILogin } from "~/types/system/user";

function Login() {
  const [login, setLogin] = useState({
    userName: "admin",
    password: "123456",
    code: "",
    uuid: "",
  } as ILogin);
  const [svgCode, setSvgCode] = useState<IcaptchaImageType>({
    img: "",
    uuid: "",
  });

  // 验证图片
  const getCaptchaImage = async () => {
    try {
      console.log(25, process.env.NODE_ENV);

      const {
        data: { result },
      } = await captchaImageAPI();
      setSvgCode(result);
    } catch (error) {}
  };

  useEffect(() => {
    getCaptchaImage();
  }, []);

  const onSubmit = () => {
    // Taro.showToast({
    //   title: `测试`,
    //   icon: "error",
    // });
    console.log(17, login);
  };

  return (
    <View className="login">
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
        <View className="at-row at-row__justify--start margin-btm">
          <View className="flex-align">
            <AtIcon value="user" size="30" color="#999999" />
          </View>
          <AtInput
            name="value"
            required
            border={false}
            type="text"
            placeholder="请输入账号"
            value={login.userName}
            onChange={() => {}}
          />
        </View>
        <View className="at-row at-row__justify--start margin-btm">
          <View className="flex-align">
            <AtIcon value="lock" size="30" color="#999999" />
          </View>
          <AtInput
            name="value"
            required
            border={false}
            type="password"
            placeholder="请输入密码"
            value={login.password}
            onChange={() => {}}
          />
        </View>

        <View
          className="at-row at-row__justify--center margin-btm"
          style={{ marginBottom: "20px" }}
        >
          <View className="at-row at-row__justify--start">
            <View className="flex-align">
              <AtIcon value="bell" size="30" color="#999999" />
            </View>
            <AtInput
              name="value"
              required
              border={false}
              type="text"
              placeholder="请输入验证码"
              value={login.code}
              onChange={() => {}}
            >
              <Image style="width: 100px;height: 25px;" src={logPng} />
            </AtInput>
          </View>
        </View>
        <AtButton formType="submit" circle type="primary">
          登录
        </AtButton>
      </AtForm>

      <View className="at-row at-row__justify--center login-deal">
        登录即代表同意 <Text style={{ color: "#0081ff" }}>《用户协议》</Text>
        <Text style={{ color: "#0081ff" }}>《隐私协议》</Text>
      </View>
    </View>
  );
}

export default Login;
