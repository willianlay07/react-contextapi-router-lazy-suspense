import { Link } from "react-router-dom";

const PostListItem = ({ id, title, body }) => {
  return (
    <div>
      <li>
        <h3>
          <Link to={`${id}`}>{title}</Link>
        </h3>
        <p>{body}</p>
      </li>
    </div>
  );
};

export default PostListItem;
