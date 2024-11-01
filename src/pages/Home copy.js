import { Button, Dialog, setDefaultConfig, Space, Toast } from "antd-mobile";
import { http } from "../api/request";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAdd, handleMinus } from "../store/reducer/store";
import SkeletonAgain from "../components/SkeletonAgain";
function Home() {
  const count = useSelector((state) => state.getIn(["store", "count"]));
  const dispatch = useDispatch();
  function handleAddCount() {
    dispatch(handleAdd());
  }
  function handleMinusCount() {
    dispatch(handleMinus());
  }
  return (
    <div className="home-box">
      <h2>home</h2>
      <p>{count}</p>
      <Space>
        <Button color="primary" onClick={handleAddCount}>
          add
        </Button>
        <Button color="danger" onClick={handleMinusCount}>
          minus
        </Button>
      </Space>
      <SkeletonAgain />
    </div>
  );
}
export default Home;
