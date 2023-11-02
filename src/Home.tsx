import { Blog } from "./Blog";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch<Blog[]>("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};
