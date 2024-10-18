import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
function App() {
  return (
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
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
