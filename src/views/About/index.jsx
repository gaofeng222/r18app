import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("first");

    return () => {};
  }, []);
  const handleJump = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <div>
        <button onClick={handleJump}>返回首页</button>
      </div>
    </div>
  );
}

export default About;
