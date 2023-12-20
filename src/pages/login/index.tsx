import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import { AtForm, AtInput, AtButton, AtIcon } from "taro-ui";
import useStore from "~/store";
import logPng from "~/assets/images/logo.png";
import "./index.scss";
import { captchaImageAPI, loginAPI } from "~/api/modules/user";
import { IcaptchaImageType, ILogin } from "~/types/system/user";
import { Base64 } from "js-base64";
import NavBar from "~/components/NavBar";

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
  const {
    useUserStore: { setToken },
  } = useStore();

  // 验证图片
  const getCaptchaImage = async () => {
    try {
      const {
        data: { result },
      } = await captchaImageAPI();

      setSvgCode({
        ...result,
        img: `data:image/svg+xml;base64,${Base64.encode(result.img)}`,
      });
    } catch (error) {}
  };

  useEffect(() => {
    getCaptchaImage();
  }, []);

  const errorMes = (message: string) => {
    Taro.showToast({
      title: message,
      icon: "error",
    });
  };

  const onSubmit = async () => {
    if (login.userName === "") {
      errorMes(`用户名不能为空`);
    } else if (login.password === "") {
      errorMes(`密码不能为空`);
    } else if (login.code === "") {
      errorMes(`验证码不能为空`);
    } else {
      Taro.showLoading({
        title: `登录中,请耐心等待...`,
      });
      try {
        const {
          data: {
            result: { token },
          },
        } = await loginAPI({ ...login, uuid: svgCode.uuid });
        setToken(token as string);
        Taro.hideLoading();
        Taro.switchTab({
          url: "/pages/main/index/index",
        });
      } catch (error) {
        setTimeout(() => {
          Taro.hideLoading();
        }, 1000);
      }
    }
  };

  return (
    <View className="login">
      <NavBar isLeft={false} title="登录" />
      <View className="at-row at-row__justify--center logo-title">
        <View className="flex-align">
          <Image
            style="width: 50px;height: 45px;background: #fff;margin-right:10px;"
            src={logPng}
          />
        </View>
        <View className="flex-align">
          <Text>leno-admin</Text>
        </View>
      </View>

      <AtForm className="login-form" onSubmit={onSubmit}>
        <View className="at-row at-row__justify--start margin-btm le-input">
          <View className="flex-align">
            <AtIcon value="user" size="22" color="#999999" />
          </View>
          <AtInput
            name="usname"
            required
            clear
            border={false}
            type="text"
            placeholder="请输入账号"
            value={login.userName}
            onChange={(value: string) => {
              setLogin({ ...login, userName: value });
            }}
          />
        </View>
        <View className="at-row at-row__justify--start margin-btm le-input">
          <View className="flex-align">
            <AtIcon value="lock" size="22" color="#999999" />
          </View>
          <AtInput
            name="psw"
            clear
            required
            border={false}
            type="password"
            placeholder="请输入密码"
            value={login.password}
            onChange={(value: string) => {
              setLogin({ ...login, password: value });
            }}
          />
        </View>

        <View
          className="at-row at-row__justify--center margin-btm"
          style={{ marginBottom: "30px" }}
        >
          <View className="at-row at-row__justify--start">
            <View className="at-row at-row__justify--start le-input">
              <View className="flex-align">
                <AtIcon
                  prefixClass="iconfont"
                  value="yanzhengma"
                  size="22"
                  color="#999999"
                />
              </View>
              <AtInput
                name="svg"
                required
                border={false}
                type="text"
                placeholder="请输入验证码"
                value={login.code}
                onChange={(value: string) => {
                  setLogin({ ...login, code: value });
                }}
              />
            </View>
            <View className="svg-check">
              <Image
                className="check-code"
                src={svgCode.img}
                onClick={getCaptchaImage}
                mode="scaleToFill"
              />
            </View>
          </View>
        </View>
        <AtButton formType="submit" circle type="primary">
          登录
        </AtButton>
      </AtForm>

      <View className="at-row at-row__justify--center login-deal">
        登录即代表同意{" "}
        <Text
          style={{ color: "#0081ff" }}
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/common/webview/index?title=用户服务协议",
            });
          }}
        >
          《用户协议》
        </Text>
        <Text
          style={{ color: "#0081ff" }}
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/common/webview/index?title=隐私政策",
            });
          }}
        >
          《隐私协议》
        </Text>
      </View>
    </View>
  );
}

export default Login;
