import { useState } from "react";
function Vote() {
  let [oppPerson, setOppPerson] = useState(0);

  function handleSubmit() {}
  function handleCancel() {
    setOppPerson(oppPerson + 1);
  }
  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">标题</h2>
        <span>15人</span>
      </div>
      <div className="main">
        <p>支持人数: 10人</p>
        <p>反对人数: {oppPerson}人</p>
      </div>
      <div className="footer">
        <button onClick={handleSubmit} className="btn btn-primary">
          支持
        </button>
        <button onClick={handleCancel} className="btn btn-danger">
          反对
        </button>
      </div>
    </div>
  );
}
export default Vote;

class Parent {
  constructor(x, y) {
    // this.name = "parent";
    console.log(x, y);
    this.total = x + y;
  }
  num = 200;
  getNum = () => {
    console.log(this);
    return this.total * 300;
  };
  static num = 100;
  static getAverage() {
    console.log(this);
    return Parent.num / 2;
  }
}

const p = new Parent(1, 2);
console.log(p.total);
console.log(p.num);
console.log(p.getNum());
console.log(Parent.getAverage());
