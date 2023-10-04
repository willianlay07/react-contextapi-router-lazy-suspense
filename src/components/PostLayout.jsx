import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const PostLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default PostLayout;
