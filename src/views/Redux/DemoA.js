import { useSelector } from "react-redux";

function DemoA() {
  const count = useSelector((state) => state.getIn(["count", "counter"]));
  return (
    <div>
      <p> Demo A count: {count}</p>
    </div>
  );
}
export default DemoA;
