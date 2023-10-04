import { usePost } from "../contexts/PostProvider";

import Loading from "../components/Loading";
import Error from "../components/Error";
import PostList from "../components/PostList";

const Post = () => {
  const { isLoading, isError, posts } = usePost();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>Post</h1>
          <PostList posts={posts} />
        </>
      )}

      {isError && <Error message={isError} />}
    </div>
  );
};

export default Post;
