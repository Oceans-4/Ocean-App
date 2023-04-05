import "./Footer.css";
// import { LogoFacebook, LogoInstagram, LogoLinkedin, LogoTwitter } from "react-ionicons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="flex flex-row justify-center">
        <li className="px-2">
          <a>
            {/* <LogoFacebook color="white" height="35px" width="35px" /> */}
          </a>
        </li>
        <li className="px-2">
          <a>
            {/* <LogoTwitter color="white" height="35px" width="35px" /> */}
          </a>
        </li>
        <li className="px-2">
          <a>
            {/* <LogoInstagram color="white" height="35px" width="35px" /> */}
          </a>
        </li>
        <li className="px-2">
          <a>
            {/* <LogoLinkedin color="white" height="35px" width="35px" /> */}
          </a>
        </li>
      </ul>
      <ul className="text-white flex flex-row justify-center mt-6 footer-links">
        <li className="px-4">
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="px-4">
          <Link to="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="px-4">
          <a>Support</a>
        </li>
        <li className="px-4">
          <a>Shop</a>
        </li>
        <li className="px-4">
          <a>Contact</a>
        </li>
      </ul>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
    </footer>
  );
};

export default Footer;
