import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
//导入三个组件
import Home from "./views/Home";
import About from "./views/About";
import User from "./views/User";
import Condition from "./views/Condition";
import State from "./views/State/demo04";
import Context from "./views/Context";
import Ref from "./views/Ref";
import LocalStorage from "./views/LocalStorage";
import EffectComp from "./views/EffectComp";
import Jsx from "./views/Jsx";
import ClassComp from "./views/ClassComp";
import Hoc from "./views/Hoc";
import RuduxComp from "./views/Redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/state" element={<State />} />
          <Route path="/context" element={<Context />} />
          <Route path="/localstorage" element={<LocalStorage />} />
          <Route path="/ref" element={<Ref />} /> {/* 👈 Renders at /app/ */}
          <Route path="/effect" element={<EffectComp />} />
          <Route path="/jsx" element={<Jsx />} />
          <Route path="/class" element={<ClassComp />} />
          <Route path="/hoc" element={<Hoc />} />
          <Route path="/redux" element={<RuduxComp />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
