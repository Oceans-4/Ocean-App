import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <ul className="flex flex-row px-3 text-white pt-5  text-lg font-bold items-center">
      <li className="px-5">
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>

      <li className="px-5">
        <Link to="/about">
          <a>About</a>
        </Link>
      </li>
      <li className="px-5">
        <Link to="/support">
          <a>Support</a>
        </Link>
      </li>
      <li className="px-5">Shop</li>
      <li className={classes.glass}>Contact</li>
    </ul>
  );
};

export default Nav;
