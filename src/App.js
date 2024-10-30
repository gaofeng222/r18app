import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

//导入三个组件
import Home from "./pages/Home";
import SagaLogin from "./views/SagaLogin";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
          <Route path="/saga-login" element={<SagaLogin />} />{" "}
          {/* 👈 Renders at /app/ */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
