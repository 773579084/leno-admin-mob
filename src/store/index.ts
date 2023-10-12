import UseUserStore from "./modules/user";
import UseGlobalStore from "./modules/global";

class RootStore {
  useUserStore: UseUserStore;

  useGlobalStore: UseGlobalStore;

  // eslint-disable-next-line no-restricted-syntax
  constructor() {
    // 对引入进行来的子模块进行实例化操作，并挂载到RootStore上
    this.useUserStore = new UseUserStore();
    this.useGlobalStore = new UseGlobalStore();
  }
}

// 实例化操作
const rootStore = new RootStore();
const useStore = () => rootStore;

export default useStore;
