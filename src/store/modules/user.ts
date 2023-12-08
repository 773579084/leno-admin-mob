import { IgetInfoType, userType } from "~/types/system/sysUser";
import { makeAutoObservable } from "mobx";
import Taro from "@tarojs/taro";

export default class UseUserInfoStore {
  userInfo = {} as userType;

  roles = [] as string[];

  permissions = [] as string[];

  token = "" as string;

  // eslint-disable-next-line no-restricted-syntax
  constructor() {
    // 响应式处理
    makeAutoObservable(this);
    this.token = Taro.getStorageSync("leno-admin-mob-token");
  }

  setUserInfo = (data: IgetInfoType) => {
    this.userInfo = data.userInfo;
    this.roles = data.roles;
    this.permissions = data.permissions;
  };

  removeUserInfo = () => {
    this.userInfo = {};
    this.roles = [];
    this.permissions = [];
  };

  setProfile = (data: userType) => {
    this.userInfo = data;
  };

  setToken = (token: string) => {
    this.token = token;
    Taro.setStorage({
      key: "leno-admin-mob-token",
      data: token,
    });
  };

  removeLocalToken = (token: string) => {
    this.token = token;
    Taro.removeStorage({
      key: "leno-admin-mob-token",
    });
  };
}
