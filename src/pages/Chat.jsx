import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();
  const [avatar, setAvator] = useState("avatar1");
  const [roomId, setRoomId] = useState("1");
  const [user, setUsername] = useState("小迷");
  function handleChangeAvatar(e) {
    setAvator(e.target.value);
  }
  function handleChangeRooms(e) {
    setRoomId(e.target.value);
  }

  function handleSubmit() {
    if (!user) return alert("请输入用户名");

    navigate(`/chatroom/${roomId}?username=${user}`);
  }

  return (
    <div>
      <h1>Chat</h1>
      <form className="chat-form">
        <p>
          <label>昵称:</label> {}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="请输入用户名"
            required
            value={user}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label>头像:</label>
          {avatar}
          <select
            name="avatar"
            id="avatar"
            required
            value={avatar}
            onChange={handleChangeAvatar}
          >
            <option value="avatar1">头像1</option>
            <option value="avatar2">头像2</option>
            <option value="avatar3">头像3</option>
          </select>
        </p>
        <p>
          <label>房间:</label>
          {roomId}
          <select
            name="roomId"
            id="roomId"
            required
            onChange={handleChangeRooms}
          >
            <option value="1">房间1</option>
            <option value="2">房间2</option>
            <option value="3">房间3</option>
          </select>
        </p>
      </form>
      <p>
        <button onClick={handleSubmit}>进入房间</button>
      </p>
    </div>
  );
}

export default Chat;
