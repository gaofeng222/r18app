import { Component } from "react";
class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  render() {
    const { x, y } = this.state;
    const { render } = this.props;
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        <h1>Mouse Tracker</h1>
        <p>
          x:{x}===> y:{y}
        </p>
        {/* <Cat mouse={this.state} /> */}
        {render({ x, y })}
        {}
      </div>
    );
  }
}
class Cat extends Component {
  render() {
    const { mouse } = this.props;
    return (
      <img
        width="100"
        height="100"
        src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
        style={{ position: "absolute", left: mouse.x - 50, top: mouse.y - 50 }}
      />
    );
  }
}

class MouseTracker extends Component {
  render() {
    return (
      <>
        <h1>Mouse Tracker</h1>
        {/* <MouseWithCat /> */}
        <Mouse
          render={(mouse) => {
            console.log("🚀 ~ MouseTracker ~ render ~ mouse111:", mouse);
            return <Cat mouse={mouse} />;
          }}
        />
      </>
    );
  }
}
export default MouseTracker;
