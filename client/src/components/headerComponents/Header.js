import Nav from "../navComponents/Nav";
import NavContainer from "../navComponents/NavContainer";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className="">
        <Link to="/">
          <h1 className="text-4xl px-5 pt-7 text-white font-bold">Ocean Buddies</h1>
        </Link>
      </div>
      <NavContainer />
    </div>
  );
};

export default Header;
