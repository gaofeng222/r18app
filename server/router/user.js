const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    code: 0,
    message: "success",
    data: {
      name: "hello world",
    },
  });
});

module.exports = router;
