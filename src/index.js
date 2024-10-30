import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd-mobile";
import "./index.css";
import App from "./App";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import enUS from "antd-mobile/es/locales/en-US";
dayjs.locale("zh-cn");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={enUS}>
    <App />
  </ConfigProvider>
);
