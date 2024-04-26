import { NavBar, Toast, DatePicker } from "antd-mobile";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import { useState } from "react";
import "./index.scss";

const now = new Date();
const Month = () => {
  const [visible, setVisible] = useState(false);
  const toggleDateModal = () => {
    setVisible(true);
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
              <span className="text">2023 | 3月账单</span>
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
              onClose={() => {
                setVisible(false);
              }}
              max={now}
              onConfirm={(val) => {
                Toast.show(val.toDateString());
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Month;
