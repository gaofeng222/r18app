import { Button, Dialog, setDefaultConfig, Space, Toast } from "antd-mobile";
import zhCN from "antd-mobile/es/locales/zh-CN";
import enUS from "antd-mobile/es/locales/en-US";
import { http } from "../api/request";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    async function getData() {
      // const data = await http.get("http://localhost:3001/v1/task/list");
      // console.log("🚀 ~ useEffect ~ data:", data);
      // 提交一个信息
      localStorage.setItem("token", "test-token");
      const result = await http.post(
        "http://localhost:3001/v1/task/write",
        {
          name: "张三",
          age: 30,
        },
        {
          method: "POST",
        }
      );
    }
    getData();
  }, []);
  const toChinese = () => {
    setDefaultConfig({
      locale: zhCN,
    });
    Dialog.alert({
      content: "已切换到中文",
    });
  };
  function toEnglish() {
    setDefaultConfig({
      locale: enUS,
    });
    Dialog.alert({
      content: "Switched to English",
    });
  }
  return (
    <div className="home-box">
      <Button onClick={toChinese} color="primary" fill="solid">
        切换语言
      </Button>
      <Button onClick={toEnglish}>Switch to English</Button>
    </div>
  );
}
export default Home;
