import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const QouteSection = () => {
  return (
    <div>
      <div className="section quote">
        <p className="qoute-text">
          <FaQuoteLeft /> Food is everything we are. It's an extension of
          nationalist feeling, ethnic feeling, your personal history, your
          province, your region, your tribe, your grandma. It's inseparable from
          those from the get-go.
        </p>
        <p className="qoute-auther">- Anthony Bourdain</p>
      </div>
      <div className="section quote">
        <p className="qoute-text">
          Nutrition is the only remedy that can bring full recovery and can be
          used with any treatment. Remember, food is our best medicine!{" "}
          <FaQuoteRight style={{ marginLeft: "0.5em" }} />
        </p>
        <p className="qoute-auther">- Bernard Jensen</p>
      </div>
    </div>
  );
};

export default QouteSection;
