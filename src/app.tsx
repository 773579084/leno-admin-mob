import { FC, ReactNode } from "react";
import "taro-ui/dist/style/index.scss";
import "./app.scss";
interface AppProps {
  children: ReactNode;
}

const App: FC<AppProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default App;
