import { useState } from "react";
import styled from "styled-components";

const ContainerP = styled.p`
  color: ${(props) => props.color};
`;

function State() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");
  const handleTextarea = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e);
    }
  };
  if (status === "success") {
    return <h1>回答正确</h1>;
  }
  return (
    <div>
      <h2>城市测验</h2>
      <p>哪个城市有把空气变成饮用水的广告牌？</p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextarea}
          placeholder="请输入答案"
        />
        <br />
        <button disabled={!answer.length || status === "submitting"}>
          提交
        </button>
        {error && (
          <ContainerP color={error ? "red" : ""}>{error.message}</ContainerP>
        )}
      </form>
    </div>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = answer.toLowerCase() !== "haha";
      if (!error) {
        resolve();
      } else {
        reject(new Error("猜的不错，但答案不对。再试试看吧！"));
      }
    }, 2000);
  });
}

export default State;
