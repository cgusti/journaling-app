import { useState } from "react";

export default function ArticleEntry({ addArticle, updateWriting }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  function submitArticle(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied");
    } else {
      addArticle({ title, body });
    }
  }

  return (
    <div>
      <form className="New_Article_Page" onSubmit={submitArticle}>
        {error && <p className="error">{error}</p>}
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        Body
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit_reflection_button">Create</button>
        <button onClick={() => updateWriting(false)}>Cancel</button>
      </form>
    </div>
  );
}
