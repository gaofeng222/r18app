import { memo } from "react";

const Chart = memo(function ({ onClick }) {
  console.log("chart");
  return <button onClick={onClick}>Send Report</button>;
});
// function Chart({ onClick }) {
//   console.log("chart");
//   return <button onClick={onClick}>Send Report</button>;
// }
export default Chart;
