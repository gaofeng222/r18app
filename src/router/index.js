import { Suspense } from "react";
import routes from "./routes";
import { Mask, DotLoading } from "antd-mobile";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 同意配置路由'

function Element(props) {
  const { component: Component, meta } = props;
  console.log("🚀 ~ Element ~ meta:", meta);
  console.log("🚀 ~ Element ~ Component:", Component);
  // 修改页面的title
  document.title = meta?.title || "知乎日报-webapp";
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  return (
    <>
      <Component
        navigate={navigate}
        location={location}
        params={params}
        usp={usp}
        meta={meta}
      />
    </>
  );
}

export default function RouterView() {
  return (
    <Suspense
      fallback={
        <Mask visible={true} opacity="thick">
          <DotLoading color="white" />
        </Mask>
      }
    >
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<Element {...route} />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}
