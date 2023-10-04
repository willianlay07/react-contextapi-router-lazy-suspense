import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    login(email, password);
    navigate("/auth/profile", {
      replace: true,
    });
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/auth/profile", {
        replace: true,
      });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <form onSubmit={handleForm}>
        <h1>Log In</h1>
        <label>Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
