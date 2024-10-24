import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
      <div>
        <Link to="/about">About</Link> | <Link to="/user">User</Link> |
        <Link to="/condition">condition</Link> | <Link to="/state">state</Link>|
        <Link to="/context">Context</Link> | <Link to="/ref">Ref</Link> |
        <Link to="/localstorage">LocalStorage</Link> |
        <Link to="/effect">Hook Effect</Link> |<Link to="/jsx">Jsx</Link> |{" "}
        <Link to="/class">Classcomp</Link> |<Link to="/hoc">Hoc</Link>|
        <Link to="/redux">Redux</Link> | <Link to="/lazy">Lazy</Link>
      </div>
    </div>
  );
}

export default Home;
