import Mock from "mockjs";
import { Random } from "mockjs";
// Mock的规则 http://mockjs.com/examples.html#Random\.last\(\)
const getList = (opts) => {
  const data = {
    name: Random.first(),
  };
  return {
    data,
  };
};

Mock.mock("/lists", getList);
