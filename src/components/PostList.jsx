import PostListItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <PostListItem
            key={index}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
