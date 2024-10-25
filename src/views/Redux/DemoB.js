import { useSelector, useDispatch } from "react-redux";
import { Button, Space, Divider } from "antd";
import { handleDelayAdd, handleDelayReduce } from "../../store/CounterReducer";
function DemoB() {
  const count = useSelector((state) => state.getIn(["count", "counter"]));
  const userInfo = useSelector((state) => state.getIn(["count", "userInfo"]));
  const dispatch = useDispatch();
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
        <Button type="primary" onClick={() => dispatch({ type: "ADD" })}>
          add count
        </Button>
        <Button type="primary" danger onClick={() => dispatch({ type: "DEC" })}>
          minus count
        </Button>
        <Button type="primary" onClick={() => dispatch(handleDelayAdd())}>
          delay 2s add count
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => dispatch(handleDelayReduce())}
        >
          delay 2s minus count
        </Button>
        <Button
          type="dashed"
          danger
          onClick={() => dispatch({ type: "CHANGE_NAME", payload: "张学友" })}
        >
          change name
        </Button>
      </Space>
    </div>
  );
}
export default DemoB;
