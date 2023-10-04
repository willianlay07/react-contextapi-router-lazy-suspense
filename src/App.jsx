import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PostProvider } from "./contexts/PostProvider";
import { AuthProvider } from "./contexts/AuthProvider";

import PostLayout from "./components/PostLayout";
import AuthLayout from "./components/AuthLayout";
import Spinner from "./components/Spinner";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Post from "./pages/Post";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import IndividualPost from "./pages/IndividualPost";
// import PageNotFound from "./pages/PageNotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Post = lazy(() => import("./pages/Post"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const IndividualPost = lazy(() => import("./pages/IndividualPost"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="post" element={<PostLayout />}>
                <Route index element={<Post />} />
                <Route path=":id" element={<IndividualPost />} />
              </Route>
              <Route path="auth" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
};

export default App;
