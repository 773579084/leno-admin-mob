import { AtNavBar } from "taro-ui";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";

const NavBar = (props: { isLeft: Boolean; title: string }) => {
  const { isLeft, title } = props;

  const [navBarTitle, setNavBarTitle] = useState("");

  useEffect(() => {
    setNavBarTitle(title);
  }, []);

  // 返回
  const navBarLeftClick = () => {
    Taro.navigateBack();
  };

  return (
    <>
      {process.env.TARO_ENV === "h5" && (
        <AtNavBar
          onClickLeftIcon={navBarLeftClick}
          color="#000"
          title={navBarTitle}
          leftIconType={isLeft ? "chevron-left" : ""}
        />
      )}
    </>
  );
};

NavBar.defaultProps = {
  isLeft: true,
};

export default NavBar;
