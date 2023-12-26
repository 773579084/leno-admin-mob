import { View } from "@tarojs/components";
import NavBar from "~/components/NavBar";
import "./index.scss";
import { AtImagePicker, AtButton } from "taro-ui";
import { useState } from "react";
import { getUserAPI, uploadAvatarAPI } from "~/api/modules/user";
import Taro from "@tarojs/taro";
import useStore from "~/store";

function Index() {
  const [files, setFiles] = useState([]);
  const [showAdd, setShowAdd] = useState(true);
  const {
    useUserStore: { setUserInfo, token },
  } = useStore();

  const changeFn = (files: any, operationType: string) => {
    if (operationType === "add") {
      setFiles(files);
      setShowAdd(false);
    }
    if (operationType === "remove") {
      setFiles([]);
      setShowAdd(true);
    }
  };

  const submitFn = async () => {
    if (files.length > 0) {
      try {
        if (process.env.TARO_ENV === "h5") {
          const fd = new FormData();
          fd.append("avatar", (files[0] as any).file.originalFileObj);
          await uploadAvatarAPI(fd);
          avatarSuccess();
        }
        if (process.env.TARO_ENV === "weapp") {
          const img = (files[0] as any).url;
          Taro.uploadFile({
            url: process.env.BASE_ENV + "/user/profile/avatar", //仅为示例，非真实的接口地址
            filePath: img,
            name: "avatar",
            header: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
            success: function () {
              avatarSuccess();
            },
          });
        }
      } catch (error) {}

      async function avatarSuccess() {
        const res = await getUserAPI();
        setUserInfo(res.data.result);
        Taro.showToast({ title: "图片修改成功", icon: "success" });
        setTimeout(() => {
          Taro.switchTab({
            url: "/pages/main/my/index",
          });
        }, 300);
      }
    }
  };

  return (
    <View className="avatar">
      <NavBar title="修改头像" />
      <AtImagePicker
        mode="top"
        showAddBtn={showAdd}
        multiple={false}
        files={files}
        length={1}
        onChange={changeFn}
      />
      <AtButton onClick={submitFn} className="submit" type="primary">
        提交
      </AtButton>
    </View>
  );
}

export default Index;
