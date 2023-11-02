import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("mario");
  const [isPending, setIsPending] = useState<boolean>(false);
  const history = useHistory();
  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("bew blog added");
        setIsPending(false);
        history.push("/");
      });
    }, 1000);
  };

  return (
    <div className="create">
      <div>Add a new Blog</div>
      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Adding blog...</button>}
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
}
