import { NavBar, Toast, DatePicker } from "antd-mobile";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import { useState, useMemo, useEffect } from "react";
import "./index.scss";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from "lodash";
import DailyBill from "./components/DailyBill";
const now = new Date();
const Month = () => {
  const [visible, setVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format("YYYY-MM");
  });
  const [currentMonthBill, setCurrentMonthBill] = useState([]);
  const toggleDateModal = () => {
    setVisible(true);
  };
  const handleConfirm = (val) => {
    const date = dayjs(val).format("YYYY-MM");
    setCurrentMonthBill(monthBillLists[date] || []);
    setCurrentDate(date);
  };

  let billLists = useSelector((state) => state.bill.billLists);

  const monthBillLists = useMemo(() => {
    billLists = _.groupBy(billLists, (item) =>
      dayjs(item.date).format("YYYY-MM")
    );
    return billLists;
  }, [billLists]);

  const monthResult = useMemo(() => {
    const pay = currentMonthBill
      .filter((bill) => bill.type === "income")
      .reduce((pre, curr) => pre + curr.money, 0);
    const income = currentMonthBill
      .filter((bill) => bill.type === "pay")
      .reduce((pre, curr) => pre + curr.money, 0);
    return {
      pay,
      income,
      total: pay + income,
    };
  }, [currentMonthBill]);

  useEffect(() => {
    setCurrentMonthBill(monthBillLists[currentDate] || []);
  }, [monthBillLists]);

  const dayGroup = useMemo(() => {
    const data = _.groupBy(currentMonthBill, (item) =>
      dayjs(item.date).format("YYYY-MM-DD")
    );
    const keys = Object.keys(data);
    return {
      data,
      keys,
    };
  }, [currentMonthBill]);

  const getMonthBillLists = () => {
    return (
      <div className="toLineOverview">
        <div className="item">
          <span className="money">{monthResult.income.toFixed(2)}</span>
          <span className="type">收入</span>
        </div>
        <div className="item">
          <span className="money">{monthResult.pay.toFixed(2)}</span>
          <span className="type">支出</span>
        </div>
        <div className="item">
          <span className="money">{monthResult.total.toFixed(2)}</span>
          <span className="type">结余</span>
        </div>
      </div>
    );
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
            {getMonthBillLists()}
            {[].map((item) => (
              <DailyBill key={item.id} data={item} />
            ))}
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
