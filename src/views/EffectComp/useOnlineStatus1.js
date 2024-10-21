// import { useState } from "react";
import useOnlineStatus1 from "./useDebugValue";
function UseOnlineStatus() {
  const [isOnline] = useOnlineStatus1();
  return isOnline ? "Online" : "Offline";
}
export default UseOnlineStatus;
