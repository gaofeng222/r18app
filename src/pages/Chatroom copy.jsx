import useInitSocket from "../socket";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function ChatRooms() {
  // console.log("🚀 ~ ChatRooms ~ socket:", socket);
  const [userList, setUserList] = useState([]);
  const location = useLocation();
  const name = location.search?.split("=")[1];
  const [username, setUsername] = useState(name);
  console.log("🚀 ~ ChatRooms ~ location:", location.search);
  const socket = useInitSocket(username);
  socket.on("online", (data) => {
    console.log("🚀 ~ socket.on ~ data:", data);
  });
  // 系统消息
  socket.emit("system", (data) => {
    console.log("🚀 ~ socket.on ~ data:", data);
  });
  return (
    <>
      <div className="room">
        <div className="room-header">
          <h3>
            XQ聊天室(<span className="count">0</span>)
          </h3>
          <button className="logout">退出</button>
        </div>
        <div className="room-nav">
          <small>在线人数：</small>
          <span id="room-users">暂无成员</span>
        </div>
        <ul className="room-content"></ul>
        <div className="room-footer">
          <input className="room-ipt" type="text" placeholder="随便写点儿吧" />
          <input className="room-btn" type="submit" value="发送" />
        </div>
      </div>
    </>
  );
}
export default ChatRooms;
