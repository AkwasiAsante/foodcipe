import CustomImage from "./CustomImage";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";

const BlogCard = ({ recipe }) => {
  return (
    <div className="blog-card">
      <>
        <CustomImage imgSrc={recipe["recipe"]["image"]} pt="65%" />
        <div className="blog-card-info">
          <img className="auther-img" src={recipe["recipe"]["image"]} alt="" />
          <p className="blog-title">{recipe["recipe"]["label"]}</p>
          <div>
            <p className="blog-desc">
              <span>Cuisine-Type:</span> {recipe["recipe"]["cuisineType"][0]}
              <br />
              {recipe["recipe"]["dietLabels"][0]}
              <br />
              {recipe["recipe"]["mealType"][0]}
            </p>
            <p className="source">
              <span>Source:</span> {recipe["recipe"]["source"]}
            </p>
          </div>

          <div className="blog-footer">
            <div>
              <Link
                to={{ pathname: `${recipe["recipe"]["label"]}` }}
                state={{ data: recipe }}
                className="view-btn"
              >
                View Recipe
              </Link>
            </div>

            <div>
              <AiFillLike />
              <AiFillDislike />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default BlogCard;
