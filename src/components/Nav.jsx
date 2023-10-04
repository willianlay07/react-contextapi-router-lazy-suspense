import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const Nav = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <ul
        style={{ listStyleType: "none", display: "flex", paddingLeft: "0px" }}
      >
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <NavLink to="/post">Post</NavLink>
        </li>
        {isAuthenticated ? (
          <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <NavLink to="/auth/profile">Profile</NavLink>
          </li>
        ) : (
          <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <NavLink to="/auth/login">Log In</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
