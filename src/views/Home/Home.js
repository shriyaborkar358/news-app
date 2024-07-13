import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css";
import NewsArticle from "./../../components/NewsArticle/NewsArticle";

function Home() {
  const [news, setNews] = useState([])

  const [searchQuery, setSearchQuery] = useState("nagpur")

  const loadNews = async () =>{
   try{
    const response =  await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-11&to=2024-07-11&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
    setNews(response.data.articles);
   }

   catch(error){
    console.log(error)
   }
  };

  useEffect(()=>{
    loadNews()
  }, [searchQuery])

  return (
    <div>
      <h1 className="news-heading">News App</h1>

      <input 
      type="text"
      className="news-article-input"
      value={searchQuery}
      onChange={(e)=>{
        setSearchQuery(e.target.value)
      }}
      />

      <div className="news-article-card-container">
        {news.map((newsArticle, i) => {
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = newsArticle;

          return (
            <>
              <NewsArticle
                author={author}
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                publishedAt={publishedAt}
                content={content}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
