import { useState } from "react";
import instance from "../axios";
import { Link } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        gender: gender,
        password: password,
        role: "user",
      };

      const result = await instance.post("/user/register", data);
      console.log(result.data);
      if (result.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="login">
      <h1>Register</h1>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <select
          name="gender"
          id="gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

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

        <button type="submit">Register</button>
        <div className="register">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
