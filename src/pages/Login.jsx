import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  function handleSubmit() {
    window.localStorage.setItem("token", "admin");
    navigate("/");
  }
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px auto" }}
    >
      <form>
        <input type="text" name="username" placeholder="Username" /> <br />
        <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}
export default Login;
