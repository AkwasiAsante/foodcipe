import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <Link to="/">
          <p className="title">FoodCipe</p>
        </Link>

        <p>
          FoodCipe is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free.
        </p>
        <p>&copy; 2022 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>mtech2000@gmail.com</p>
        <p>+233 243 860 216</p>
        <p>Kasoa - Ghana</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p>
          <a
            href="https://facebook.com/mordecai.asante"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </p>
        <p>
          <a
            href="https://instagram.com/major_akwasi_asante"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/gideon-asante-560411134"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
