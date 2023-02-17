const ArticleCard = ({ article, imageUrls }) => {
  const { title, url } = article;

  return (
    <div className="col-12 col-md-6 col-lg-6">
      <a href={url}>
        <div className="article-card">
          {imageUrls && <img className="article-image" src={imageUrls} alt={title} />}
          <div className="article-text">
            <p className="article-news">POPULAR</p>
            <h3 className="article-title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArticleCard;
