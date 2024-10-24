import store from "../../store/index";
function DemoA() {
  const count = store.getState().counter;
  return (
    <div>
      Demo A<p>--- count: {count}</p>
    </div>
  );
}
export default DemoA;
