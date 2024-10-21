import { useEffect, useState } from "react";
import useOnlineStatus from "./useOnlineStatus";
function UseOnLine() {
  // const [isOnlien, setIsOnLine] = useOnlineStatus();
  const isOnlien = useOnlineStatus();
  return (
    <>
      <h1>UseOnLine</h1>
      <p>Is online: {isOnlien ? "Yes" : "No"}</p>
      <button disabled={!isOnlien}>
        {isOnlien ? "Save progress" : "Reconnecting..."}
      </button>
    </>
  );
}
export default UseOnLine;
