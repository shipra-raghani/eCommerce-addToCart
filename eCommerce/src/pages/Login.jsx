import { useState } from "react";
import instance from "../axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const data = {
        email: email,
        password: password,
        role: "user",
      };

      const result = await instance.post("/user/login", data);
      console.log(result);
      if (result.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <div className="register">
          <p>Don't have any account?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
