import { useEffect } from "react";

function LocalStorage() {
  function handleChangeName() {
    localStorage.setItem("name", "zhangsan" + Math.random());
  }

  useEffect(() => {
    window.addEventListener("storage", (e) => {
      console.log(e);
    });
    // 模拟触发自定义的 StorageEvent
    window.addEventListener("localStorageChange", (e) => {
      console.log(e);
    });
    return () => {};
  }, []);
  const triggerCustomStorageEvent = () => {
    const key = "name";
    const value = "zhangsan" + Math.random();
    localStorage.setItem(key, value);
    const storageEvent = new CustomEvent("localStorageChange", {
      detail: { key, value },
    });
    window.dispatchEvent(storageEvent);
  };
  return (
    <>
      <h1>Local Storage</h1>

      {/* <button onClick={handleChangeName}>提交</button> */}
      <button onClick={triggerCustomStorageEvent}>自定义提交</button>
    </>
  );
}

export default LocalStorage;
