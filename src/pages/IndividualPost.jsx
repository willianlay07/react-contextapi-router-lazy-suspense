import { useParams } from "react-router-dom";
import { usePost } from "../contexts/PostProvider";
import Loading from "../components/Loading";
import { useEffect } from "react";

const IndividualPost = () => {
  const { id } = useParams();
  const { title, body, fetchEachPost, isLoading } = usePost();

  useEffect(() => {
    fetchEachPost(id);
  }, [id, fetchEachPost]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>Post Id: {id}</h1>
          <h3>Title: {title}</h3>
          <p>Body: {body}</p>
        </>
      )}
    </div>
  );
};

export default IndividualPost;
