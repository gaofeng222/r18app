import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log(process.env);
    // 请求接口
    fetch("/api/v1/users")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>当前的环境是:{process.env.NODE_ENV}</p>
      <p>当前的环境是:{process.env.REACT_APP_API_URL}</p>
    </div>
  );
}

export default App;
