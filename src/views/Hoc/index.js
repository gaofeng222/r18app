import { useState } from "react";
import "./index.css";
import NavstyleComp from "./NavstyleComp";
function Hoc() {
  const [title, setTitle] = useState("标题");
  const [content, setContent] = useState("内容");

  const Component = ProxyTest(Demo);
  return (
    <>
      <Component title={title} content={content} />
      <NavstyleComp className="nav-style" />
    </>
  );
}

function Demo(props) {
  const { title, content } = props;
  return (
    <div className="demo">
      <h1>{title}</h1>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}

function ProxyTest(Component) {
  return function (props) {
    return <Component {...props} />;
  };
}
export default Hoc;
