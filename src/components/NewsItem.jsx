function NewsItem({ title, body }) {
  return (
    <article className="card news-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default NewsItem;
