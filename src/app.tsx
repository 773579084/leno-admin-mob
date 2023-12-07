import { FC, ReactNode } from "react";
import "taro-ui/dist/style/index.scss";
import "./app.scss";
import "~/assets/icons/iconfont.scss";
import RouterMonitor from "./components/RouterMonitor";
interface AppProps {
  children: ReactNode;
}

const App: FC<AppProps> = ({ children }) => {
  return (
    <div>
      <RouterMonitor url={window.location.href} />
      {children}
    </div>
  );
};

export default App;
