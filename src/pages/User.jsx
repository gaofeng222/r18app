import { useNavigate } from "react-router-dom";
function User() {
  const navigate = useNavigate();
  function handleClick() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div>
      <h1>User Page</h1>
      <p>This is the user page.</p>
      <div>
        <button onClick={handleClick}>退出登录</button>
      </div>
    </div>
  );
}

export default User;
