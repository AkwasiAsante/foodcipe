import CustomImage from "./CustomImage";
import {
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img_1,
  img_2,
  img_3,
} from "../assets";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const images = [
    img01,
    img02,
    img03,
    img04,
    img05,

    img07,
    img_1,
    img_2,
    img_3,
  ];

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          FoodCipe is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <Link to="/recipes">
          <button className="btn">explore now</button>
        </Link>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
