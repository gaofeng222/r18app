import { forwardRef, useRef, useImperativeHandle } from "react";
// const MyInputRef = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });

const MyInputRef = forwardRef(function (props, ref) {
  // 直接暴露dom元素
  // return <input {...props} ref={ref} />;
  // 只对外暴露出一个方法focus
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      console.log("input focus");
      inputRef.current && inputRef.current.focus();
    },
    inputRef,
  }));
  return <input ref={inputRef} {...props} />;
});

export default MyInputRef;
