import { useState } from "react";
function ButtonOff() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        {isOn ? "On" : "Off"}
      </button>
      {isOn ? "开" : "关"}
    </>
  );
}

export default ButtonOff;
