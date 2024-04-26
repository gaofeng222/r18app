const DailyBill = (props) => {
  const { data } = props;
  return (
    <div className="dailyBill">
      <div className="header">
        <div className="dateIcon">
          <span className="date">03月23日</span>
          <sapn className="arrow"></sapn>
        </div>
      </div>
      <div className="toLineOverview">
        <div className="item">
          <span className="money">{data.income.toFixed(2)}</span>
          <span className="type">收入</span>
        </div>
        <div className="item">
          <span className="money">{data.pay.toFixed(2)}</span>
          <span className="type">支出</span>
        </div>
        <div className="item">
          <span className="money">{data.total.toFixed(2)}</span>
          <span className="type">结余</span>
        </div>
      </div>
    </div>
  );
};

export default DailyBill;
