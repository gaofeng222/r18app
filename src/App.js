import "./App.css";
import {
  HashRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import RouterView from "./router/index";

function App() {
  return (
    <HashRouter basename="/app">
      <RouterView />
    </HashRouter>
  );
}

export default App;
