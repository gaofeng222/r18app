import DemoA from "./DemoA";
import DemoB from "./DemoB";
import store from "../../store/index";
import { useEffect, useState } from "react";
import { Divider, Space } from "antd";
import { useSelector } from "react-redux";

function ReduxSaga() {
  const count = useSelector((state) => state.getIn(["count", "counter"]));
  const userInfo = useSelector((state) => state.getIn(["task", "user"]));

  return (
    <div>
      Redux parent count:{count}
      <br />
      Redux parent userInfo:{userInfo.get("name")} <br />
      Redux parent userInfo:{userInfo.get("age")}
      <Divider />
      <Space split={<Divider type="vertical" />}>
        <DemoA />
        <DemoB />
      </Space>
    </div>
  );
}

export default ReduxSaga;
