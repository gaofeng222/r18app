function Dialog({ children, title, content, handleClick }) {
  function handleClose() {
    handleClick();
  }
  return (
    <div
      className="dialog"
      style={{
        width: "300px",
        border: "1px solid #000",
        padding: "10px",
      }}
    >
      <div
        className="dialog__header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>
          {title} <span onClick={handleClose}>x</span>
        </h2>
      </div>
      <div className="dialog__content">{children}</div>
      <div className="dialog__footer">
        <button>确定</button>
        <button>取消</button>
      </div>
    </div>
  );
}
export default Dialog;
