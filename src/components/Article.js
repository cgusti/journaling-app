import { useState } from "react";
import EditBox from "./EditBox";

export default function GetArticle({
  article,
  deleteArticleREACT,
  editArticleREACT,
}) {
  const [editing, setEditing] = useState(false);

  return (
    <article>
      {!article ? (
        <h1 className="no_reflections_selected_TEXT">No reflection selected</h1>
      ) : (
        <section className="Article_Contents">
          <div className="article_header">
            <h2 className="title">{article.title}</h2>
            <p className="date">{`Posted: ${article.date}`}</p>
          </div>
          <p className="body">{article.body}</p>
          <button onClick={() => deleteArticleREACT(article.id)}>delete</button>
          <button
            onClick={() => {
              editArticleREACT(article.id, article.body);
              setEditing(true);
            }}
          >
            edit
          </button>
          {editing === true && (
            <EditBox
              CurrentArticle={article}
              editArticleREACT={editArticleREACT}
              setEditing={setEditing}
            />
          )}
        </section>
      )}
    </article>
  );
}
