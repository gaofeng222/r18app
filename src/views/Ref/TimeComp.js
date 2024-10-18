import { useState, useRef } from "react";
function Chat() {
  const [msg, setMsg] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  let timeoutID = useRef(null);
  function handleChange(e) {
    console.log(e.target.value);
    setMsg(e.target.value);
  }
  function handleSubmit() {
    setSubmit(true);
    timeoutID.current = setTimeout(() => {
      setSubmit(false);
      alert("发送成功！");
    }, 3000);
  }
  function handleCancel() {
    setSubmit(false);
    clearTimeout(timeoutID.current);
  }
  return (
    <>
      <input type="text" value={msg} onChange={handleChange} />
      <button disabled={isSubmit} onClick={handleSubmit}>
        {isSubmit ? "发送中……" : "发送"}
      </button>
      {isSubmit && <button onClick={handleCancel}>取消</button>}
    </>
  );
}
export default Chat;
