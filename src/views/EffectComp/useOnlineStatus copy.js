import { useEffect, useState } from "react";
function useOnlineStatus() {
  const [isOnlien, setIsOnLine] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnLine(true);
    });
    window.addEventListener("offline", () => {
      setIsOnLine(false);
    });
    return () => {
      window.removeEventListener("online", () => {});
      window.removeEventListener("offline", () => {});
    };
  }, []);
  return [isOnlien, setIsOnLine];
}

export default useOnlineStatus;
