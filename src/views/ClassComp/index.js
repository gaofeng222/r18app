import { Component } from "react";
class ClassComp extends Component {
  state = {
    count: 10,
  };
  handleAdd = (x, e) => {
    console.log("🚀 ~ ClassComp ~ x:", x);

    console.log(e);
  };
  handleAdd2 = (e, x) => {
    console.log("🚀 ~ ClassComp ~ e, x:", e, x);
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        Class Component
        <p>
          {count}
          <br />
          <button onClick={this.handleAdd.bind(null, 20)}>add</button>
          <button onClick={(e) => this.handleAdd2("10", e)}>add2</button>
        </p>
      </div>
    );
  }
}
export default ClassComp;
