import { useEffect, useState, useSyncExternalStore } from "react";
function ChartInditor() {
  const isOnline = useOnlineStatus();
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}
function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => {
      console.log("recomputing");
      return navigator.onLine;
    },
    () => true
  );
}

export default ChartInditor;
