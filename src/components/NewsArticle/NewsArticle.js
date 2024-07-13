import React from "react";
import "./NewsArticle.css";

function NewsArticle({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) {
  return (
    <div className="news-article-card">
      <img src={urlToImage} className="news-article-image" />
      <h2 className="news-article-title">{title}</h2>

      <div className="news-article-author">
        <p>{author}</p>
        <p>{publishedAt}</p>
      </div>

      <p className="news-article-description">{description}</p>   
      <div className="news-article-btn-container">
        <a href={url} target="_blank" className="news-article-btn">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsArticle;
