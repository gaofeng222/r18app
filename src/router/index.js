import routesList from "./routes";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
  NavLink,
} from "react-router-dom";
import { Suspense, useEffect, useLayoutEffect } from "react";
const whiteLists = ["/login"];

function Element({ component: Component, ...rest }) {
  const location = useLocation();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    if (
      !whiteLists.includes(location.pathname) &&
      !localStorage.getItem("token")
    ) {
      navigate("/login");
    } else if (
      location.pathname === "/login" &&
      localStorage.getItem("token")
    ) {
      navigate("/");
    }

    return () => {};
  }, [navigate]);
  // if (
  //   !whiteLists.includes(location.pathname) &&
  //   !localStorage.getItem("token")
  // ) {
  //   navigate("/login");
  // } else if (location.pathname === "/login" && localStorage.getItem("token")) {
  //   navigate("/");
  // }
  return <Component {...rest}></Component>;
}
function createRouter() {
  return (
    <>
      {routesList.map((route, index) => {
        return (
          <Route
            key={route.name}
            path={route.path}
            element={<Element {...route} />}
          />
        );
      })}
    </>
  );
}

export default function RouterView() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>{createRouter()}</Routes>
      </Suspense>
      <div style={{ textAlign: "center" }}>
        <NavLink to="/"> home </NavLink> | <NavLink to="/boss">Boss</NavLink> |{" "}
        <NavLink to="/user">User</NavLink>
      </div>
    </>
  );
}

export function WithRouter(Component) {
  return function Hoc(props) {
    // 提前获取路由信息，传递给组件
    const location = useLocation(),
      navigate = useNavigate(),
      params = useParams(),
      [usp] = useSearchParams();
    const pathObj = { location, navigate, params, usp };
    return <Component {...props} {...pathObj} />;
  };
}
