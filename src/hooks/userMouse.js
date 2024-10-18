import { useState, useEffect } from "react";

export function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setMouse({ x: event.clientX, y: event.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return mouse;
}
