import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Blog } from "./Blog";

export default function BlogDetails() {
  let { id } = useParams<{ id: string }>();
  const history = useHistory();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch<Blog>("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {blog && (
        <div>
          <div> {blog.title}</div>
          <div>Written by {blog.author}</div>
          <div> {blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
