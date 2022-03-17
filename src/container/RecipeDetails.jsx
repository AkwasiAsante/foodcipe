import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      {console.log(data)}
      <div className="section recipe-details">
        <div className="col img">
          <img src={data.recipe.image} alt="food" />
        </div>
        <div className="col typography">
          <h1 className="title">{data.recipe.label}</h1>
          <div className="cat">
            <button className="btn">ingredient</button>
            {/* <button className="btn">Nutritional Fact</button> */}
          </div>
          {data.recipe.ingredientLines.map((item, index) => (
            <p className="rd-item" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="col typography nutritionalfact">
          <div className="cat">
            <button className="btn">Nutritional Fact</button>
          </div>
          <div>
            <p className="rd-item">
              {data.recipe.totalNutrients.CA.label} :
              <span className="nname">
                {data.recipe.totalNutrients.CA.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.CA.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.CHOCDF.label} :
              <span className="nname">
                {data.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.CHOCDF.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.ENERC_KCAL.label} :
              <span className="nname">
                {data.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.ENERC_KCAL.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.FAT.label} :
              <span className="nname">
                {data.recipe.totalNutrients.FAT.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.FAT.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.FE.label} :
              <span className="nname">
                {data.recipe.totalNutrients.FE.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.FE.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.FIBTG.label} :
              <span className="nname">
                {data.recipe.totalNutrients.FIBTG.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.FIBTG.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.PROCNT.label} :
              <span className="nname">
                {data.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.PROCNT.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.SUGAR.label} :
              <span className="nname">
                {data.recipe.totalNutrients.SUGAR.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.SUGAR.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.VITB12.label} :
              <span className="nname">
                {data.recipe.totalNutrients.VITB12.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.VITB12.unit}</span>
            </p>

            <p className="rd-item">
              {data.recipe.totalNutrients.VITB6A.label} :
              <span className="nname">
                {data.recipe.totalNutrients.VITB6A.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.VITB6A.unit}</span>
            </p>
            <p className="rd-item">
              {data.recipe.totalNutrients.ZN.label} :
              <span className="nname">
                {data.recipe.totalNutrients.ZN.quantity.toFixed(2)}
              </span>
              <span>{data.recipe.totalNutrients.ZN.unit}</span>
            </p>
          </div>
        </div>
        <div className="col img">
          <img src={data.recipe.image} alt="food" />
        </div>

        <div className="healthLabel">
          <h2>Health Label</h2>
          <div className="healthLabel-container">
            {data.recipe.healthLabels.map((item, index) => (
              <div
                key={index}
                style={{ animationDelay: index * 0.1 + "s" }}
                className="health-item"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card-footer">
          <p>
            Source: <span>{data.recipe.source}</span>
          </p>
          <a href={data.recipe.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
