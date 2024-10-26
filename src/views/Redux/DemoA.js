import { useSelector } from "react-redux";

function DemoA() {
  const count = useSelector((state) => state.count.counter);
  return <div>{<p> Demo A count: {count}</p>}</div>;
}
export default DemoA;
