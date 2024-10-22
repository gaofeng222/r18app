import { Component } from "react";
class Vote extends Component {
  state = {
    oppPerson: 0,
    aggPerson: 0,
  };
  handleSubmit() {}
  handleCancel = () => {
    this.state.oppPerson++;
    this.forceUpdate();
  };
  render() {
    const { oppPerson, aggPerson } = this.state;
    return (
      <div className="vote-box">
        <div className="header">
          <h2 className="title">标题</h2>
          <span>15人</span>
        </div>
        <div className="main">
          <p>支持人数: {aggPerson}人</p>
          <p>反对人数: {oppPerson}人</p>
        </div>
        <div className="footer">
          <button onClick={this.handleSubmit} className="btn btn-primary">
            支持
          </button>
          <button onClick={this.handleCancel} className="btn btn-danger">
            反对
          </button>
        </div>
      </div>
    );
  }
}
export default Vote;
