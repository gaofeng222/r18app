// express 服务器
const express = require("express");

const router = express.Router();
const data = [
  {
    no: "1",
    status: 1,
    task: "西湖区湖底公园1号",
    endTime: "2021-12-30",
    key: 1,
  },
  {
    no: "2",
    status: 2,
    task: "西湖区湖底公园1号",
    endTime: "2024-12-30",
    key: 2,
  },
];

// 获取数据
router.get("/", (req, res) => {
  return res.json({
    code: 200,
    msg: "success",
    data,
  });
});

// 获取数据
router.delete("/:id", (req, res) => {
  console.log("🚀 ~ router.delete ~ req:", req.params);
  const result = data.filter((item) => item.key != req.params.id);
  return res.json({
    code: 200,
    msg: "success",
    data: result,
  });
});

module.exports = router;
