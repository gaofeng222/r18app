import { lazy } from "react";
import Home from "../pages/Home";
const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "知乎日报-webapp",
    },
    component: Home,
    exact: true,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    meta: {
      title: "新闻详情-知乎日报",
    },
    component: lazy(() => import("../pages/Detail")),
  },
  {
    path: "/personal",
    name: "Personal",
    meta: {
      title: "个人中心-知乎日报",
    },
    component: lazy(() => import("../pages/Personal")),
  },
  {
    path: "/store",
    name: "Store",
    meta: {
      title: "我的收藏-知乎日报",
    },
    component: lazy(() => import("../pages/Store")),
  },
  {
    path: "/update",
    name: "Update",
    meta: {
      title: "修改个人信息-知乎日报",
    },
    component: lazy(() => import("../pages/Update")),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录/注册-知乎日报",
    },
    component: lazy(() => import("../pages/Login")),
  },
  {
    path: "*",
    name: "404",
    meta: {
      title: "404-知乎日报",
    },
    component: lazy(() => import("../pages/Page404")),
  },
];

export default routes;
