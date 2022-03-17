import { useState } from "react";
import { FoodCategories, RecipeCard } from "../components";
import { img00 } from "../assets";
import { SpinnerRoundOutlined } from "spinners-react";

const Recipes = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <FoodCategories
        recipesData={recipesData}
        setRecipesData={setRecipesData}
        from={0}
        to={60}
        loading={loading}
        setLoading={setLoading}
        searchValue="vegan"
      />
      <div className="recipes-container">
        {loading && (
          <div className="loader">
            <SpinnerRoundOutlined
              size={50}
              thickness={100}
              speed={100}
              color="#36ad47"
              secondarycolor="rgba(0, 0, 0, 0.44)"
            />
          </div>
        )}
        {!loading &&
          (recipesData.length === 0 ? (
            <div className="loader">
              <img src={img00} alt="No Image" />
              <h4>No Recipe Found</h4>
            </div>
          ) : (
            recipesData.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))
          ))}
      </div>
    </div>
  );
};

export default Recipes;
