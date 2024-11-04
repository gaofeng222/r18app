import VirtualList from "./virtualList";
function Vlist() {
  let listData = [];
  for (let i = 0; i < 1000; i++) {
    listData.push({ key: i, value: 50 + Math.random() * 200 });
  }
  return (
    <div className="container-box">
      <VirtualList listData={listData} />
    </div>
  );
}

export default Vlist;
