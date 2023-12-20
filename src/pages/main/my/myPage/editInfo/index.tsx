import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtButton, AtForm, AtInput, AtRadio } from "taro-ui";
import NavBar from "~/components/NavBar";
import { userType } from "~/types/system/sysUser";
import "./index.scss";
import useStore from "~/store";
import { getUserAPI, updateUserInfoAPI } from "~/api/modules/user";
import Taro from "@tarojs/taro";

function Index() {
  const [editUserInfo, setEditUserInfo] = useState<userType>({});
  const {
    useUserStore: { setUserInfo, userInfo },
  } = useStore();

  useEffect(() => {
    setEditUserInfo(userInfo);
  }, []);

  const onSubmit = async () => {
    try {
      await updateUserInfoAPI({
        nickName: editUserInfo.nickName,
        phonenumber: editUserInfo.phonenumber,
        email: editUserInfo.email,
        sex: editUserInfo.sex,
      });
      const res = await getUserAPI();
      setUserInfo(res.data.result);
      Taro.showToast({ title: "修改成功", icon: "success" });
    } catch (error) {}
  };

  return (
    <View>
      <NavBar title="编辑资料" />
      <AtForm onSubmit={() => {}}>
        <AtInput
          clear
          name="nickname"
          title="用户昵称"
          type="text"
          placeholder="请输入"
          value={editUserInfo.nickName}
          onChange={(value: string) => {
            setEditUserInfo({ ...editUserInfo, nickName: value });
          }}
        />
        <AtInput
          clear
          name="phone"
          title="手机号码"
          type="text"
          placeholder="请输入"
          value={editUserInfo.phonenumber}
          onChange={(value: string) => {
            setEditUserInfo({ ...editUserInfo, phonenumber: value });
          }}
        />
        <AtInput
          clear
          name="email"
          title="邮箱"
          type="text"
          placeholder="请输入"
          value={editUserInfo.email}
          onChange={(value: string) => {
            setEditUserInfo({ ...editUserInfo, email: value });
          }}
        />
        <AtRadio
          value={editUserInfo.sex}
          onClick={(value: string) => {
            setEditUserInfo({ ...editUserInfo, sex: value });
          }}
          options={[
            { label: "男", value: "0" },
            { label: "女", value: "1" },
          ]}
        />
        <AtButton
          className="submit"
          type="primary"
          formType="submit"
          onClick={onSubmit}
        >
          提交
        </AtButton>
      </AtForm>
    </View>
  );
}

export default Index;
