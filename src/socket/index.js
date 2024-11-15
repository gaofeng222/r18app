import { io } from "socket.io-client";

function useInitSocket(username) {
  console.log("🚀 ~ useInitSocket ~ username:", username);
  const socket = io("ws://localhost:3333", {
    query: {
      username,
    },
    transports: ["websocket"],
    autoConnect: true,
  });
  return socket;
}

export default useInitSocket;
