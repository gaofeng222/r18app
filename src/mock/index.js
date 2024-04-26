import Mock, { Random } from "mockjs";
const okSatatus = {
  code: 0,
  msg: "请求成功！！",
};
// Mock的规则 http://mockjs.com/examples.html#Random\.last\(\)
const getList = (opts) => {
  const data = Mock.mock({
    "lists|10": [
      {
        "id|+1": 0,
        "usefor|+1": ["drinks", "fruit", "play game", "tour"],
        date: "@datetime",
        "type|1": ["income", "pay"],
        "money|-10000-10000": 100,
      },
    ],
  });
  return {
    ...okSatatus,
    ...data,
  };
};

Mock.mock("/lists", getList);
