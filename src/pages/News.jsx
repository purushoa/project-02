import { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem.jsx";

function News() {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    async function fetchNews() {
      try {
        // Example API – replace with your backend later
        const res = await fetch("http://localhost:4000/api/news");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setArticles(data);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    }

    fetchNews();
  }, []);

  if (status === "loading") {
    return <p>Loading news...</p>;
  }

  if (status === "error") {
    return <p>Could not load news. Try again later.</p>;
  }

  return (
    <section>
      <h2>Latest News</h2>
      <div className="card-grid">
        {articles.map((article) => (
          <NewsItem key={article.id} title={article.title} body={article.body} />
        ))}
      </div>
    </section>
  );
}

export default News;
