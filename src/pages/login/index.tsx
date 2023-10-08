import { View, Button, Text } from "@tarojs/components";
import { useEffect, useState } from "react";

function Login() {
  // 使用 useState 创建状态变量
  const [count, setCount] = useState(0);

  // 使用 useEffect 定义副作用
  useEffect(() => {
    // 这里可以执行副作用操作，类似于 componentDidMount 和 componentDidUpdate
    document.title = `Count: ${count}`;

    // 返回一个清理函数，类似于 componentWillUnmount
    return () => {
      document.title = "My Page";
    };
  }, [count]); // 传递依赖数组，只有依赖项发生变化时才会重新运行副作用

  return <View>登录页</View>;
}

export default Login;
