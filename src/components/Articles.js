import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

const Articles = () => {
  const noOfArticles = 10;

  const [articles, setArticles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const fetchArticleImages = async () => {
    const apiKey = "33706006-243142fe91766cde3e9accfb9";
    const query = "F1";

    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&category=sports&order=latest&image_type=photo&per_page=${noOfArticles}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.hits.map((hit) => hit.webformatURL);
    } catch (err) {
      console.error(err);
      return [];
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
          return fetchArticleImages(articleData);
        })
        .then((imageUrlsData) => setImageUrls(imageUrlsData))
        .catch((err) => console.log(err));
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
