import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ArticleCard from "../../components/ArticleCard";
import "./landing.css";

const Landing = () => {
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
    <section className="landing-container container-fluid">
      <div className="articles row">
        <div className="play-wrap col-12 col-lg-5">
          <p className="play-featured">FEATURED</p>
          <h2 className="play-title">
            It's a RACE where driver knowledge reigns supreme! Do you have what it takes to come out on TOP with P1
            Heroes?
          </h2>
          <div className="play-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magnam iste, provident voluptatum numquam
              rem fugit ut, unde, at quos facere molestiae! Nesciunt tempora nam molestias quas quasi consequatur quia?
            </p>
            <img className="landing-image" src="./images/landing-image.jpeg" alt="F1 Heroes" />
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <motion.div className="articles-wrap row">
            {articles.map((article, i) => (
              <ArticleCard key={i} article={article} imageUrls={imageUrls[i]} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
