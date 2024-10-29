import { useSelector, useDispatch } from "react-redux";
import { Button, Space, FloatButton } from "antd";
import * as actionTypes from "../../store/sagas/actionTypes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AticleContainerContainer } from "./style";
function SagaList() {
  const list = useSelector((state) => state.getIn(["sys", "articleList"]));
  const userInfo = useSelector((state) => state.getIn(["sys", "userInfo"]));
  const isLogin = useSelector((state) => state.getIn(["sys", "isLogin"]));
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleLoginOut = () => {
    dispatch({
      type: actionTypes.LOGIN_OUT + "@@SAGA@@",
    });
  };
  useEffect(() => {
    if (!isLogin) {
      navigator("/saga-login");
    }
    return () => {};
  }, [isLogin]);
  return (
    <AticleContainerContainer>
      <h1>Saga-List</h1>
      <p>This is the SagaList page.</p>
      <Space>
        <p>{userInfo.get("username")}</p>
        {userInfo.get("password")}
      </Space>
      <div>
        <FloatButton
          type="primary"
          description={"退出"}
          onClick={handleLoginOut}
        >
          退出登录
        </FloatButton>
      </div>

      <ul>
        {list.map((item) => {
          return (
            <li key={item.username}>
              {item.username} --- {item.channelName}
            </li>
          );
        })}
      </ul>
    </AticleContainerContainer>
  );
}
export default SagaList;
