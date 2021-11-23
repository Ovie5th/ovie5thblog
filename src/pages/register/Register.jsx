import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <h1 className="registerTitle">Register</h1>
      <form className="registerForm">
        <label> Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Username"
        />
        <label> Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email here"
        />
        <label> Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password here"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="loginlink" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
