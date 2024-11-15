const express = require("express");
const userRouter = require("./router/user.js");
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use("/user", userRouter);

const userLists = [];

io.on("connection", (socket) => {
  const username = socket.handshake.query.username;
  const userInfo = userLists.find((user) => user.username === username);

  if (userInfo) {
    userInfo.id = socket.id;
  } else {
    userLists.push({ username, id: socket.id });
  }

  io.emit("online", userLists);

  socket.on("chat", (data) => {
    for (let key of io.sockets.sockets.keys()) {
      console.log(key);
    }
    const targetSocket = io.sockets.sockets.get(data.targetId);
    console.log("🚀 ~ socket.on ~ targetSocket:", targetSocket);
    const toUser = userLists.find((user) => user.id === data.targetId);
    if (targetSocket) {
      targetSocket.emit("receive", {
        form: data.from,
        msg: data.msg,
        time: new Date().toLocaleString(),
        to: toUser?.username,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
  });
});

io.listen(3333, () => {
  console.log("Server is running22");
});
