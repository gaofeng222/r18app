import { Component } from "react";
class ClassComp extends Component {
  state = {
    x: 0,
    y: 0,
    z: 0,
  };
  handleClick = () => {
    this.setState({ x: this.state.x + 1 }, () => console.log(this.state));
  };
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }
  render() {
    const { x, y, z } = this.state;
    return (
      <>
        <h1>ClassComp</h1>
        <p>
          x:{x} y: {y} z:{z}
        </p>
        <button onClick={this.handleClick}>点击</button>
      </>
    );
  }
}
export default ClassComp;
