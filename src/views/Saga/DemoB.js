import { useSelector, useDispatch } from "react-redux";
import { Button, Space, Divider } from "antd";
import * as counterActions from "../../store/sagas/actionTypes";
function DemoB() {
  const count = useSelector((state) => state.getIn(["count", "counter"]));
  const userInfo = useSelector((state) => state.getIn(["task", "user"]));
  console.log("🚀 ~ DemoB ~ userInfo:", userInfo);

  const dispatch = useDispatch();

  const handeAddCount = () => {
    dispatch({
      type: counterActions.INCREMENT,
      payload: { step: 122, id: 10 },
    });
  };

  function handeMinusCount() {
    dispatch({
      type: counterActions.DECREMENT,
      payload: { step: 1, id: 10 },
    });
  }

  function handeAddCountAsync() {
    dispatch({
      type: counterActions.INCREMENT + "@@sagas@@",
      payload: { step: 122, id: 10 },
    });
  }

  function handeMinusCountAsync() {
    dispatch({
      type: counterActions.DECREMENT + "@@sagas@@",
      payload: { step: 1, id: 10 },
    });
  }

  function handeMinusCountAsyncBy10() {
    dispatch({
      type: counterActions.DECREMENT + "@@sagas@@",
      payload: { step: 10, id: 10 },
    });
  }
  return (
    <div>
      <p>Demo B</p>
      <div>
        <Space split={<Divider />}>
          <span>name: {userInfo.get("name")}</span>
          <span>age: {userInfo.get("age")}</span>
          <span>count:{count}</span>
        </Space>
      </div>
      <Space>
        <Button type="primary" onClick={handeAddCount}>
          add count
        </Button>
        <Button type="primary" danger onClick={handeMinusCount}>
          minus count
        </Button>
        <Button type="primary" onClick={handeAddCountAsync}>
          delay 2s add count
        </Button>
        <Button type="primary" danger onClick={handeMinusCountAsync}>
          delay 2s minus count
        </Button>
        <Button type="primary" onClick={handeMinusCountAsyncBy10}>
          delay 2s add count by 10
        </Button>
      </Space>
    </div>
  );
}
export default DemoB;
