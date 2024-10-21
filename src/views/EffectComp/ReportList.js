import { useCallback, useState } from "react";
import Chart from "./Chart";
function sendReport(item) {
  console.log("Sending report for", item);
}

function ReportList({ items }) {
  const [msg, setMsg] = useState("hello");
  function handleChange(e) {
    setMsg(e.target.value);
    console.log(msg);
  }
  return (
    <article>
      {items.map((item) => {
        // 🔴 你不能在循环中调用 useCallback：
        return <Report key={item.id} item={item} />;
      })}
      <input type="text" value={msg} onChange={handleChange} />
    </article>
  );
}

function Report({ item, onClick }) {
  const handleClick = useCallback(() => {
    sendReport(item);
  }, [item]);

  return (
    <figure key={item.id}>
      <Chart onClick={handleClick} />
    </figure>
  );
}

export default ReportList;
