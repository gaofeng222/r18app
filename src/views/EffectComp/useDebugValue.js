import { useDebugValue, useState } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useDebugValue(isOnline ? "Online" : "Offline");
  return [isOnline, setIsOnline];
}
export default useOnlineStatus;
