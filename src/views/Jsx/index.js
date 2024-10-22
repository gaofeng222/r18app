import PropTypes from "prop-types";
import { useState } from "react";
import Dialog from "./Dialog";
import Vote from "./Vote";
import MouseTracker from "./MouseTracker";
function Jsx() {
  let text = [1, 2, 3, 4];
  const [isShow, setShow] = useState(false);
  // const [arr, setArr] = React.useState([1, 2, 3]);
  // let arr;
  // const arr1 = new Array(5).fill(5); // 创建一个长度为5的数组，并赋值undefined，是稀疏数组
  // console.log(arr1);
  // arr1.forEach((value, index, array) => {
  //   console.log(value, index, array);
  // });

  let obj = {
    a: 1,
    b: "2",
    c: true,
    d: {
      e: 1,
    },
  };
  Object.seal(obj);
  // obj.d = 10;
  obj.d = { e: 2 };
  // delete obj.a;
  console.log(obj);
  function handleClick() {
    setShow(!isShow);
  }
  return (
    <div>
      Jsx
      <hr />
      {text}
      {/* <Child /> */}
      {/* <button onClick={handleClick}>显示dialog</button> */}
      {isShow && (
        <Dialog title="标题" handleClick={handleClick}>
          <div slot="content">
            <p>内容</p>
          </div>
        </Dialog>
      )}
      {/* <Vote /> */}
      <MouseTracker />
    </div>
  );
}
function Child({ name, age }) {
  return (
    <div>
      Child-{name}-{age}
    </div>
  );
}

Child.defaultProps = { name: "zs22222222", age: 18 };
Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string,
    PropTypes.bool,
  ]),
};
export default Jsx;
