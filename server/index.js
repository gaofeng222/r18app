// express 服务器
const express = require("express");
const cors = require("cors");
// 创建服务器
const app = express();

app.use(cors());
// 解析post请求体
app.use(express.json());
// 解析urlencoded请求体
app.use(express.urlencoded({ extended: false }));
// 引入路由模块
const userRouter = require("./router/user");
const taskListRouter = require("./router/tasklist");
app.use("/v1/users", userRouter);
app.use("/v1/task", taskListRouter);
// const articleRouter = require("./router/article");
// app.use("/article", articleRouter);

// 监听端口
app.listen(3001, () => {
  console.log("服务器启动成功");
});
