import { FC } from "react";
import { Provider } from "mobx-react";

import counterStore from "./store/counter";

import "./app.scss";

const store = {
  counterStore,
};

const App: FC = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default App;
