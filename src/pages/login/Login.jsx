import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <h1 className="loginTitle">Login</h1>
      <form className="loginForm">
        <label> Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your email here"
        />
        <label> Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password here"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="registerlink" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
