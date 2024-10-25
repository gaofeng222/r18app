import DemoA from "./DemoA";
import DemoB from "./DemoB";
import store from "../../store/index";
import { useEffect, useState } from "react";
import { Divider, Space } from "antd";
import { useSelector } from "react-redux";
function Redux() {
  const counter = useSelector((state) => state.getIn(["count", "counter"]));
  return (
    <div>
      Redux parent count:{counter}
      <Divider />
      <Space split={<Divider type="vertical" />}>
        <DemoA />
        <DemoB />
      </Space>
    </div>
  );
}

export default Redux;
