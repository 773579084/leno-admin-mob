import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import {
  AtButton,
  AtInput,
  AtList,
  AtListItem,
  AtMessage,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader,
  AtToast,
} from "taro-ui";
import { logoutAPI, updatePwdAPI } from "~/api/modules/user";
import NavBar from "~/components/NavBar";
import "./index.scss";

function Index() {
  const [toast, setToast] = useState(false);
  const [updatePwd, setUpdatePwd] = useState({
    isOpen: false,
    newPwd: "",
    oldPwd: "",
    confirmPwd: "",
  });
  const [logout, setLogout] = useState(false);

  // 修改密码
  const updatePwdFn = async () => {
    const { isOpen, ...data } = updatePwd;
    try {
      const res = await updatePwdAPI(data);
      if (res) {
        Taro.atMessage({
          message: "密码修改成功",
          type: "success",
        });
        setUpdatePwd({ newPwd: "", oldPwd: "", confirmPwd: "", isOpen: false });
      }
    } catch (error) {}
  };

  // 退出
  const logoutFn = async () => {
    try {
      await logoutAPI();
      Taro.removeStorage({
        key: "leno-admin-mob-token",
      });
      Taro.redirectTo({
        url: "/pages/login/index",
      });
    } catch (error) {}
  };

  return (
    <View className="setting">
      <NavBar title="应用设置" />
      <AtList className="list">
        <AtListItem
          title="修改密码"
          arrow="right"
          onClick={() => {
            setUpdatePwd({ ...updatePwd, isOpen: true });
          }}
          iconInfo={{ size: 25, color: "#78A4FA", value: "lock" }}
        />
        <AtListItem
          title="检查更新"
          arrow="right"
          onClick={() => {
            setToast(true);
          }}
          iconInfo={{ size: 25, color: "#78A4FA", value: "reload" }}
        />
        <AtListItem
          title="清理缓存"
          arrow="right"
          onClick={() => {
            setToast(true);
          }}
          iconInfo={{
            size: 25,
            color: "#78A4FA",
            prefixClass: "iconfont",
            value: "qingkong",
          }}
        />
      </AtList>
      <AtButton className="list btn" onClick={() => setLogout(true)}>
        退出登录
      </AtButton>
      <AtToast
        isOpened={toast}
        text="模块建设中"
        onClose={() => setToast(false)}
      ></AtToast>
      <AtMessage />
      <AtModal isOpened={updatePwd.isOpen}>
        <AtModalHeader>修改密码</AtModalHeader>
        <AtModalContent>
          <AtInput
            clear
            name="oldPwd"
            title="旧密码"
            type="password"
            placeholder="请输入"
            value={updatePwd.oldPwd}
            onChange={(value: string) => {
              setUpdatePwd({ ...updatePwd, oldPwd: value });
            }}
          />{" "}
          <AtInput
            clear
            name="newPwd"
            title="旧密码"
            type="password"
            placeholder="请输入"
            value={updatePwd.newPwd}
            onChange={(value: string) => {
              setUpdatePwd({ ...updatePwd, newPwd: value });
            }}
          />{" "}
          <AtInput
            clear
            name="confirmPwd"
            title="确认密码"
            type="password"
            placeholder="请输入"
            value={updatePwd.confirmPwd}
            onChange={(value: string) => {
              setUpdatePwd({ ...updatePwd, confirmPwd: value });
            }}
          />
        </AtModalContent>
        <AtModalAction>
          <Button
            onClick={() => {
              setUpdatePwd({
                newPwd: "",
                oldPwd: "",
                confirmPwd: "",
                isOpen: false,
              });
            }}
          >
            取消
          </Button>
          <Button onClick={updatePwdFn}>确定</Button>
        </AtModalAction>
      </AtModal>

      <AtModal isOpened={logout}>
        <AtModalHeader>系统提示</AtModalHeader>
        <AtModalContent>
          <View className="modal-content">确定注销并退出系统吗？</View>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => setLogout(false)}>取消</Button>
          <Button onClick={logoutFn}>确定</Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
}

export default Index;
