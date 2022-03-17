import { BlogCard, FoodCategories } from "../components";
import { useState } from "react";
import { img00 } from "../assets";
import { SpinnerRoundOutlined } from "spinners-react";
const Blog = () => {
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
        searchValue="rice"
      />
      <div className="blog-container">
        {loading && (
          <div className="loader">
            <SpinnerRoundOutlined
              size={50}
              thickness={100}
              speed={100}
              color="#36ad47"
              secondaryColor="rgba(0, 0, 0, 0.44)"
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
              <BlogCard key={index} recipe={recipe} />
            ))
          ))}
      </div>
    </div>
  );
};

export default Blog;
