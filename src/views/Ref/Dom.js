import { useRef, useEffect } from "react";
function Dom() {
  const inputRef = useRef(null);
  useEffect(() => {
    // inputRef.current
    // console.log(inputRef.current);
    inputRef.current.focus();
    return () => {};
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default Dom;
