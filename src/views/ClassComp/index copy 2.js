import { Component, createRef, forwardRef } from "react";

class Child1 extends Component {
  render() {
    return <h2 className="title">标题111</h2>;
  }
}
const Child2 = forwardRef(function (props, ref) {
  return (
    <h2 className="title" ref={ref}>
      标题222
    </h2>
  );
});

class ClassComp extends Component {
  box3 = createRef();
  render() {
    return (
      <div>
        <h2 className="title" ref={this.box3}>
          温馨提示
        </h2>
        <Child1 ref={(x) => (this.child1 = x)} />
        <Child2 ref={(x) => (this.child2 = x)} />
        <input type="text" ref={(x) => (this.input = x)} />
      </div>
    );
  }
  componentDidMount() {
    console.log(this.child1);
    console.log(this.child2);
    console.log(this.input);
  }
}
export default ClassComp;
