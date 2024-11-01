import "./App.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RouterView from "./router";

//导入三个组件
import Home from "./pages/Home";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <RouterView />
      </HashRouter>
    </Provider>
  );
}

export default App;
