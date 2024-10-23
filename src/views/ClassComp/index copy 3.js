import { Component } from "react";
import { flushSync } from "react-dom";
class ClassComp extends Component {
  state = {
    x: 10,
    y: 20,
    z: 0,
  };
  handleAdd = () => {
    for (let i = 0; i < 20; i++) {
      // setTimeout(() => {

      // }, i * 10);
      // flushSync();
      this.setState((prev) => {
        return { x: prev.x + 1 };
      });
    }
    console.log(this.state.x);
  };
  render() {
    console.log("render class component");
    const { x, y, z } = this.state;
    return (
      <div>
        Class Component
        <p>
          x: {x}, y: {y} z:{z}
          <br />
          <button onClick={this.handleAdd}>add</button>
        </p>
      </div>
    );
  }
}
export default ClassComp;
