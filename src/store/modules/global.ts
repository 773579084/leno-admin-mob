import { makeAutoObservable } from "mobx";

export default class UseGlobalStore {
  isLoading = false; // 控制全局loading效果

  logout = true; // 退出弹窗控制

  address = ""; // 路径地址

  constructor() {
    makeAutoObservable(this);
  }

  changeLogout = (bol: boolean) => {
    this.logout = bol;
  };
}
