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
    useUserStore: { setUserInfo },
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
        }
        if (process.env.TARO_ENV === "weapp") {
          // await uploadAvatarAPI(fd as any);
        }

        const res = await getUserAPI();
        setUserInfo(res.data.result);
        Taro.showToast({ title: "图片修改成功", icon: "success" });
        // Taro.switchTab({
        //   url: "/pages/main/my/index",
        // });
      } catch (error) {}
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
