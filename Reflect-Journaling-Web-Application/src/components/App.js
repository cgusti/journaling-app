import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import GetArticle from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import {
  fetchArticles,
  createArticleDB,
  deleteArticleDB,
  editArticleDB,
} from "../services/articleService";
import "./App.css";
import { sendPasswordResetEmail } from "@firebase/auth";

export default function App() {
  const [allArticles, setArticles] = useState([]);
  const [currentArticle, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);

  const [signedIn, setSignedIn] = useState(false);

  const user = useAuthentication();

  const title = "Reflect App";

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  function addArticleREACT({ title, body }) {
    createArticleDB({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...allArticles]);
      setWriting(false);
    });
  }

  function deleteArticleREACT(id) {
    deleteArticleDB(id);
    const newArticlesInNavbar = allArticles.filter(
      (article) => article.id !== id
    );
    setArticles(newArticlesInNavbar);
    setArticle(null);
  }

  function editArticleREACT(id, body) {
    editArticleDB(id, body).then((body) => {
      const editedArticle = { ...currentArticle, body };
      setArticles(
        allArticles.map((e) => (e.id === editedArticle.id ? editedArticle : e))
      );
      setArticle(editedArticle);
    });
  }

  return (
    <div className="App">
      <header className="Main_Header_Bar">
        {user && (
          <button className="Article_Button" onClick={() => setWriting(true)}>
            New Reflection
          </button>
        )}
        {user ? <h1 className="header_title">{title}</h1> : ""}
        {!user ? <SignIn /> : <SignOut />}
      </header>

      {!user ? (
        <div className="Sign-In-Screen"> TEST </div>
      ) : (
        <Navbar articles={allArticles} setArticle={setArticle} />
      )}

      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticleREACT} updateWriting={setWriting} />
      ) : (
        <GetArticle
          article={currentArticle}
          deleteArticleREACT={deleteArticleREACT}
          editArticleREACT={editArticleREACT}
        />
      )}
    </div>
  );
}
