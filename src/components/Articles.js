import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

const Articles = () => {
  const noOfArticles = 10;
  const [articles, setArticles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const fetchArticleImages = async (title) => {
    const apiKey = "AIzaSyAcRQsjzoclNmv139eAucaisRDE7ZYIpzk";
    const cx = "e7fad3bd57ceb4683";

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${title}&searchType=image`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data.items.map((item) => item.link).slice(0, 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchArticles = () => {
      // const NEWS_API_KEY = "dbc459935f4a4396ac5ec8a225ea0504";
      const NEWS_API_KEY2 = "35b375c55dc24b02b8cfb82232e933d9";
      fetch(`https://newsapi.org/v2/everything?q=f1&sortBy=relevance&language=en&sources=bbc-news`, {
        headers: {
          "x-api-key": NEWS_API_KEY2,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const articleData = data.articles.slice(0, noOfArticles);
          setArticles(articleData);
          return Promise.all(articleData.map((article) => fetchArticleImages(article.title)));
        })
        .then((imageUrlsData) => setImageUrls(imageUrlsData))
        .catch((err) => console.error(err));
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles-wrap row">
      {articles.map((article, i) => (
        <ArticleCard key={i} article={article} imageUrls={imageUrls[i]} />
      ))}
    </div>
  );
};

export default Articles;
