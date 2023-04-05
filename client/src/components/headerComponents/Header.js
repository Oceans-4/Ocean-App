import Nav from "../navComponents/Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className="text-4xl px-5 pt-7 text-white font-bold">Ocean Buddies</h1>
      <Nav />
    </div>
  );
};

export default Header;
