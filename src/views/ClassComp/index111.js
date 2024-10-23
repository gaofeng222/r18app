import { Component, createRef } from "react";
class ClassComp extends Component {
  box3 = createRef();
  render() {
    return (
      <div>
        <h2 className="title" ref={this.box3}>
          温馨提示
        </h2>
      </div>
    );
  }
  componentDidMount() {
    console.log("ClassComp componentDidMount");
    // const dom = document.querySelector(".title");
    // console.log("🚀 ~ ClassComp ~ componentDidMount ~ dom:", dom);
    // dom.style.color = "red";
    // const dom = this.refs.titleBox;
    console.log("🚀 ~ ClassComp ~ componentDidMount ~ dom:", this.box3);
    // dom.style.color = "green";
    this.box3.current.style.color = "green";
  }
}
export default ClassComp;
