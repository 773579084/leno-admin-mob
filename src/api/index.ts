import axios, { type Method } from "axios";
import { getToken, removeToken } from "~/utils/auth";
import useStore from "~/store";
import Taro from "@tarojs/taro";

const instance = axios.create({
  baseURL: "",
  timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(
  (response: any) => {
    // token配置请求头
    if (!response.headers?.authorization && getToken()) {
      response.headers.Authorization = `Bearer ${getToken()}`;
    }

    return response;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 二进制数据则不走公用错误提示
    if (
      (error && error.request.responseType === "blob") ||
      error.request.responseType === "arraybuffer"
    ) {
      return Promise.reject(error);
    }
    // userStore
    const {
      useGlobalStore: { logout, changeLogout },
      useUserStore: { removeLocalToken },
    } = useStore();
    const { data } = error.response;

    /** 错误集中提示
     * 400 => 表示前端传参可能出现错误
     * 401 => 权限过期
     * 403 => 无访问权限
     * 500 => 服务器拒绝请求
     */
    switch (data && data.code) {
      case "400":
        Taro.showToast({
          title: `${data.code}: ${data.message}`,
          icon: "error",
        });
        break;
      case "401":
        if (logout) {
          changeLogout(false);
          Taro.showModal({
            title: "系统提示",
            content: "登录状态已过期，您可以继续留在该页面，或者重新登录",
            cancelText: "取消",
            confirmText: "重新登录",
            success: function (res) {
              if (res.confirm) {
                changeLogout(true);
                removeToken();
                removeLocalToken("");
                window.location.hash = "/login";
              } else if (res.cancel) {
                changeLogout(true);
              }
            },
          });
        }
        break;
      case "403":
        Taro.showToast({
          title: `${data.code}: ${data.message}`,
          icon: "error",
        });
        break;
      case "500":
        Taro.showToast({
          title: `${data.code}: ${data.message}`,
          icon: "error",
        });
        break;

      default:
        Taro.showToast({
          title: "未知错误，请联系管理人员",
          icon: "error",
        });
        break;
    }
    return Promise.reject(error);
  }
);

// 后端返回的接口数据格式
export interface ResponseData<T> {
  status: number;
  data: T;
}

/**
 * axios 二次封装
 * @param {String} url  请求地址
 * @param {String} method  请求类型
 * @param {Object} submitData  对象类型，提交数据
 */
export const http = <T>(method: Method, url: string, submitData?: unknown) =>
  instance.request<T, ResponseData<T>>({
    url,
    method,
    // 自动设置合适的 params/data 键名称，如果 method 为 get 用 params 传请求参数，否则用 data
    [method.toUpperCase() === "GET" ? "params" : "data"]: submitData,
  });

export default instance;
