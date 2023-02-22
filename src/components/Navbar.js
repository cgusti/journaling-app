export default function Navbar({ articles, setArticle }) {
  return (
    <nav>
      <h1 href="Navbar_Header">Reflections</h1>
      {!articles
        ? "No reflections written"
        : articles.map((a) => (
            <p key={a.id} onClick={() => setArticle(a)}>
              {a.title}
            </p>
          ))}
    </nav>
  );
}
