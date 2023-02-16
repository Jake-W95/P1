const ArticleCard = ({ article, imageUrl }) => {
  const { title } = article;

  return (
    <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="article-card container">
        {imageUrl && <img className="article-image" src={imageUrl} alt={title} />}
        <h3 className="article-title">{title}</h3>
      </div>
    </div>
  );
};

export default ArticleCard;
