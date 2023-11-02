import { Link } from "react-router-dom";
import { Blog } from "./Blog";

type Props = {
  blogs: Blog[];
  title: string;
};

export default function BlogList({ blogs, title }: Props) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
