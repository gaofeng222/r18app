import { useEffect } from "react";
function GoodsList({ onSubmit }) {
  function handleClick(e) {
    onSubmit(e);
  }

  useEffect(() => {
    console.log("GoodsList useEffect");
    return () => {};
  }, [onSubmit]);

  return (
    <div>
      商品列表
      <button onClick={handleClick}>提交</button>
    </div>
  );
}
export default GoodsList;
