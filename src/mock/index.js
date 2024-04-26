import Mock, { Random } from "mockjs";
const okSatatus = {
  code: 0,
  msg: "请求成功！！",
};
// Mock的规则 http://mockjs.com/examples.html#Random\.last\(\)
const getList = (opts) => {
  const data = Mock.mock({
    "string|1-10": "★",
    username: Random.cname(),
    "age|1-50": 20,
    "lists|1-10": [
      {
        "name|+1": ["Hello", "Mock.js", "!"],
        "id|+1": 0,
      },
    ],
  });
  return {
    ...okSatatus,
    ...data,
  };
};

Mock.mock("/lists", getList);
