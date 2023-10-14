import useStore from "~/store";
import { toJS } from "mobx";

/**
 * 权限字符判断
 * @param perm
 * @returns boolean
 */
export function hasPermi(perm: string | string[]) {
  const {
    useUserStore: { permissions },
  } = useStore();
  const permList = toJS(permissions);
  if (permList[0] === "*:*:*") return false;

  // 判断perm为字符串，还是数组情况
  if (Object.prototype.toString.call(perm) === "[object Array]") {
    return !(perm as string[]).every((item) => permList.includes(item));
  }
  return !permList.some((item) => item === perm);
}
