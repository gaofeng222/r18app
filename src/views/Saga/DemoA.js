import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import * as useActionTypes from "../../store/sagas/actionTypes";
function DemoA() {
  const count = useSelector((state) => state.getIn(["count", "counter"]));
  const dispatch = useDispatch();
  const handleChangeName = () => {
    console.log("change name");
    dispatch({
      type: useActionTypes.CHANGE_NAME,
      payload: {
        name: "小李菲菲",
        age: 18,
      },
    });
  };
  const handleChangeNameAsync = () => {
    dispatch({
      type: useActionTypes.CHANGE_NAME + "@@sagas@@",
      payload: {
        name: "小李菲菲 from sagas",
        age: 26,
      },
    });
  };
  return (
    <div>
      {<p> Demo A count: {count}</p>}
      <Button type="dashed" danger onClick={handleChangeName}>
        change name
      </Button>
      <Button type="primary" onClick={handleChangeNameAsync}>
        change name async delay 2s
      </Button>
    </div>
  );
}
export default DemoA;
