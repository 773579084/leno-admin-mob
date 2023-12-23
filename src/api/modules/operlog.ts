import { http } from "~/api";
import {
  IoperlogType,
  IgetDetailTypeAPI,
  IgetListAPI,
} from "~/types/system/operlog";

// 查询列表
export const getListAPI = (data: IoperlogType) =>
  http<IgetListAPI>("GET", "/system/logMan/operlog/list", data);

// 获取详细数据
export const getDetailAPI = (id: number) =>
  http<IgetDetailTypeAPI>("GET", `/system/logMan/operlog/detail/${id}`);
