import { Navigate } from "react-router-dom";
import { lazy } from "react";
import Home from "../pages/Home.jsx";
export default [
  {
    path: "/",
    name: "index",
    component: () => <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "Home",
      description: "Home page",
    },
  },
  {
    path: "/boss",
    name: "boss",
    component: lazy(() => import("../pages/Boss.jsx")),
  },
  {
    path: "/detail/:id",
    name: "detail-detail",
    component: lazy(() => import("../pages/Detail.jsx")),
  },
  {
    path: "/user",
    name: "User",
    component: lazy(() => import("../pages/User.jsx")),
  },
  {
    path: "/login",
    name: "Login",
    component: lazy(() => import("../pages/Login.jsx")),
  },
  {
    path: "/chat",
    name: "Chat",
    component: lazy(() => import("../pages/Chat.jsx")),
  },
  {
    path: "/chatroom/:id",
    name: "Chartroom",
    component: lazy(() => import("../pages/Chatroom.jsx")),
  },
  {
    path: "*",
    name: "not-found",
    component: lazy(() => import("../pages/404.jsx")),
  },
];
