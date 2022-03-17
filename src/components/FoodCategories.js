import Axios from "axios";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";

const FoodCategories = ({
  recipesData,
  setRecipesData,
  to,
  from,
  loading,
  setLoading,
  searchValue,
}) => {
  const searches = [
    "Vegan",
    "vegetarian",
    "burger",
    "cookies",
    "juice",
    "biriyani",
    "salad",
    "ice cream",
    "lasagna",
    "pudding",
    "soup",
  ];
  const [query, setQuery] = useState(searchValue);

  const YOUR_APP_ID = process.env.REACT_APP_AUTH_APP_ID;
  const YOUR_APP_KEY = process.env.REACT_APP_AUTH_YOUR_APP_KEY;
  const [errMsg, setErrMsg] = useState(false);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=${from}&to=${
    errMsg === true ? 10 : to
  }&`;

  const getRecipeInfo = async () => {
    setLoading(true);
    try {
      var result = await Axios.get(url);
      setRecipesData(result.data.hits);
      console.log(result.data.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {
    getRecipeInfo();
  };

  useEffect(() => {
    getRecipeInfo();
  }, []);
  return (
    <div className="food-categories section">
      <h2>Popular Recipes</h2>
      <div className="food-categories-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        {/* <div>
          <Link to="/blog">
            <button className="add-recipe">
              Add Recipe <IoMdAdd />
            </button>
          </Link>
        </div> */}
        <div>
          <input
            type="text"
            placeholder="Search ..."
            autoComplete="Off"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn" onClick={onSubmit}>
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
