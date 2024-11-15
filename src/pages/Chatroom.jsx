import initSocket from "../socket";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
let socket = null;
function ChatRooms() {
  const [userList, setUserList] = useState([]);
  const location = useLocation();
  const name = location.search?.split("=")[1];
  const [username, setUsername] = useState(name);
  const [targetUser, setTargetUser] = useState({});
  const [msgBox, setMsgBox] = useState({});
  const [msg, setMsg] = useState("");
  useEffect(() => {
    socket = initSocket(username);
    socket.on("online", (data) => {
      console.log("🚀 ~ socket.on ~ data:", data);
      setUserList(data);
    });

    socket.on("receive", (data) => {
      console.log("🚀 ~ receive", data);
      !msgBox[data.form] && (msgBox[data.form] = []);
      msgBox[data.form].push(data);
      setMsgBox({ ...msgBox });
    });

    socket.on("error", (error) => {
      console.log("🚀 ~ error", error);
    });
  }, []);
  const handleClick = (item) => {
    console.log("🚀 ~ item", item);
    setTargetUser(item);
    console.log(msgBox, "box");
  };
  const sendMessage = () => {
    /**
     * 信息的object
     * {
     *   zhansan:[
     *    {
     *      form: 'zhansan',
     *      msg: '你好',
     *      time: '2021-09-24 16:58:37'
     *      to:"lisi"
     *    }
     *   ],
     * }
     * */
    if (!msg) {
      alert("请输入内容");
    } else if (!targetUser.username) {
      alert("请选择一个用户");
    }
    !msgBox[targetUser.username] && (msgBox[targetUser.username] = []);
    msgBox[targetUser.username].push({
      form: username,
      msg: msg,
      time: new Date().toLocaleString(),
      to: targetUser.username,
    });
    setMsgBox({ ...msgBox });
    socket.emit("chat", {
      targetId: targetUser.id,
      msg,
      from: username,
      time: new Date().toLocaleString(),
    });
    setMsg("");
  };
  const handleChange = (e) => {
    setMsg(e.target.value);
  };
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
          <ul>
            {userList.map((item) => {
              return (
                <li onClick={() => handleClick(item)} key={item.id}>
                  {item.username}
                </li>
              );
            })}
          </ul>
          {!userList.length && <span id="room-users">暂无成员</span>}
        </div>
        <h3>发送给:{targetUser.username}</h3>
        <ul className="room-content">
          {msgBox[targetUser.username]?.map((item) => {
            return (
              <li
                key={item.id}
                className={targetUser.username !== item.form ? "right" : ""}
              >
                <p>{item.time}</p>
                <span>{`${item.form}: ${item.msg}`}</span>
              </li>
            );
          })}
        </ul>
        <div className="room-footer">
          <input
            value={msg}
            onChange={handleChange}
            className="room-ipt"
            type="text"
            placeholder="随便写点儿吧"
          />
          <input
            type="button"
            className="room-btn"
            onClick={sendMessage}
            value="发送"
          />
        </div>
      </div>
    </>
  );
}
export default ChatRooms;
