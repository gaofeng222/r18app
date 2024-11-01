import { Avatar, Space, Divider } from "antd-mobile";
import { HomeHeadBox } from "./style";
import { timeList } from "../utils";
import { useMemo } from "react";
function HomeHead({ today }) {
  console.log("🚀 ~ HomeHead ~ today:", today);
  const time = useMemo(() => {
    let [_, month, day] = today.match(/^\d{4}(\d{2})(\d{2})$/);
    month = timeList[month];
    return [month, day];
  }, [today]);
  return (
    <HomeHeadBox className="home-head-box">
      <Space className="home-head-box__info" style={{ "--gap": "0.02rem" }}>
        <div className="time">
          <span className="time-day">{time[1]}</span>
          <span className="time-month">{time[0]}月</span>
        </div>
        <Divider
          direction="vertical"
          style={{
            height: "30px",
            borderColor: "#999",
          }}
        />
        <h2>知乎日报</h2>
      </Space>

      <div className="home-head-box__avatar">
        <Avatar
          src={
            "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
        />
      </div>
    </HomeHeadBox>
  );
}
export default HomeHead;
