import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const AuthLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
