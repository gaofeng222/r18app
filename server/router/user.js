// express 服务器
const express = require("express");

const router = express.Router();

// 获取数据
router.get("/", (req, res) => {
  return res.json({
    code: 200,
    msg: "success",
    data: [
      { id: 1, name: "张三" },
      { id: 2, name: "李四" },
      { id: 3, name: "王五" },
    ],
  });
});

module.exports = router;
