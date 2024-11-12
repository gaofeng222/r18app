function WithRouter(Component) {
  return function Hoc(props) {
    // 提前获取路由信息，传递给组件
    return <Component {...props} />;
  };
}
export default WithRouter;
