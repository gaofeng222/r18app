import { useNavigate } from "react-router-dom";
import MyButton from "../../components/MyButton";
import { useState, useEffect } from "react";
import { useMouse } from "../../hooks/userMouse";
import { useCountTime } from "../../components/TimeCount";
import Card from "../../components/Card";
import Avatar from "../../components/Avatar";
function Profile({ url }) {
  return (
    <img
      style={{ width: "200px", height: "150px" }}
      src={url}
      alt="Katherine Johnson"
    />
  );
}
function User() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  const content = isLogin ? (
    <AdminPanel />
  ) : (
    <LoginPanel handleLogin={handleLogin} />
  );
  return <div>{content}</div>;
}

function AdminPanel() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const ListItem = () => {
    return products.map((ele) => <li key={ele.id}>{ele.title}</li>);
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const { x, y } = useMouse();
  const time = useCountTime();
  return (
    <>
      <h1>User</h1>
      <p>This is the user page.</p>
      <Profile url="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1rVn2M.img?w=536&h=420&m=6&x=248&y=133&s=175&d=175" />
      <Profile url="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1rmNgw.img?w=768&h=586&m=6&x=442&y=229&s=259&d=259" />
      <Profile url="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1rmDpy.img?w=768&h=526&m=6&x=419&y=98&s=557&d=194" />
      <div>
        <button onClick={handleBack}>返回</button>
      </div>
      <MyButton onClick={handleClick}>Click me {count}</MyButton>
      <MyButton onClick={handleClick}>Click me2 {count}</MyButton>
      <ul>{<ListItem />}</ul>

      <div>
        x:{x} y:{y}
      </div>
      <h3>今天是星期 {time}</h3>
      <Card>
        <Avatar
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
          size={180}
        />
      </Card>
    </>
  );
}

function LoginPanel(props) {
  return (
    <div>
      <div>Not login</div>
      <MyButton onClick={props.handleLogin}>Login</MyButton>
    </div>
  );
}

export default User;
