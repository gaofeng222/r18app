import { Form, Input, Button } from "antd";
import { useState, useEffect } from "react";
import { LoginContainer } from "./style.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actionTypes from "../../store/sagas/actionTypes";
function SagaLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isLogin = useSelector((state) => state.getIn(["sys", "isLogin"]));
  const navigator = useNavigate();

  const dispatch = useDispatch();
  const handleChangeName = (e) => {
    setUsername(e.target.value);
    dispatch({
      type: actionTypes.CHANGE_USERNAME + "@@SAGA@@",
      value: e.target.value,
    });
  };
  const handleChangePwd = (e) => {
    setPassword(e.target.value);
    dispatch({
      type: actionTypes.CHANGE_PASSWORD + "@@SAGA@@",
      value: e.target.value,
    });
  };

  const onFinish = (values) => {
    console.log(values);
    setIsLoading(true);
    dispatch({ type: actionTypes.LOGIN + "@@SAGA@@", value: values });
  };

  useEffect(() => {
    if (isLogin) {
      setIsLoading(false);
      navigator("/saga-list", {
        replace: true,
      });
    }
    return () => {};
  }, [isLogin]);
  return (
    <LoginContainer>
      <div className="main">
        <h2>Saga-Login</h2>

        <br />
        {isLogin}
        <Form onFinish={onFinish}>
          <Form.Item
            label="用户名:"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="请输入用户名"
              value={username}
              onChange={handleChangeName}
            />
          </Form.Item>
          <Form.Item
            label="密码:"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              placeholder="请输入密码"
              type="password"
              value={password}
              onChange={handleChangePwd}
            />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit" loading={isLoading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginContainer>
  );
}

export default SagaLogin;
