import DemoA from "./DemoA";
import DemoB from "./DemoB";
import store from "../../store/index";
import { useEffect, useState } from "react";
import { Divider, Space } from "antd";
import { useSelector } from "react-redux";
function Redux() {
  const count = useSelector((state) => state.count.counter);
  return (
    <div>
      Redux parent count:{count}
      <Divider />
      <Space split={<Divider type="vertical" />}>
        <DemoA />
        <DemoB />
      </Space>
    </div>
  );
}

export default Redux;
