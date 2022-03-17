import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe["recipe"]["image"]} pt="65%" />
      <div className="recipe-card-info">
        <img className="auther-img" src={recipe["recipe"]["image"]} alt="" />
        <p className="recipe-title">{recipe["recipe"]["label"]}</p>
        <div>
          <p className="recipe-desc">
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
        <Link
          to={{ pathname: `${recipe["recipe"]["label"]}` }}
          state={{ data: recipe }}
          className="view-btn"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
