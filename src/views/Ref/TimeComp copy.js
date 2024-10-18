import { useState } from "react";
function Chat() {
  const [msg, setMsg] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  function handleChange(e) {
    console.log(e.target.value);
    setMsg(e.target.value);
  }
  function handleSubmit() {
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
      alert("发送成功！");
    }, 3000);
  }
  function handleCancel() {
    setSubmit(false);
  }
  return (
    <>
      <input type="text" onChange={handleChange} />{" "}
      <button disabled={isSubmit} onClick={handleSubmit}>
        {isSubmit ? "发送中……" : "发送"}
      </button>
      {isSubmit && <button onClick={handleCancel}>取消</button>}
    </>
  );
}
export default Chat;
