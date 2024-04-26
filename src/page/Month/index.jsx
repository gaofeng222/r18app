import { NavBar, Toast, DatePicker } from "antd-mobile";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import { useState } from "react";
import "./index.scss";
import dayjs from "dayjs";

const now = new Date();
const Month = () => {
  const [visible, setVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format("YYYY-MM");
  });
  const toggleDateModal = () => {
    setVisible(true);
  };
  const handleConfirm = (val) => {
    const date = dayjs(val).format("YYYY-MM");
    setCurrentDate(date);
  };

  return (
    <>
      <div className="monthlyBill">
        <NavBar className="nav" backArrow={false}>
          月度账单
        </NavBar>
        <div className="content">
          <div className="header">
            <div className="date">
              <span className="text">{currentDate + ""}月账单</span>
              <span className="arrow" onClick={toggleDateModal}>
                {visible ? <UpOutline /> : <DownOutline />}
              </span>
            </div>
            <div className="toLineOverview">
              <div className="item">
                <span className="money">{100}</span>
                <span className="type">支出</span>
              </div>
              <div className="item">
                <span className="money">{200}</span>
                <span className="type">收入</span>
              </div>
              <div className="item">
                <span className="money">{100}</span>
                <span className="type">结余</span>
              </div>
            </div>
            <DatePicker
              title="记账日期"
              visible={visible}
              precision="month"
              onClose={() => {
                setVisible(false);
              }}
              max={now}
              onConfirm={handleConfirm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Month;
