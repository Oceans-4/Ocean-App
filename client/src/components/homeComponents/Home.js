import HomeInfo from "./HomeInfo";
import HomeMission from "./HomeMission";
import homePagePhoto from "./../../images/palm-tree.jpg";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { reducer } from "../navComponents/NavLinks";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, { aboutStyling: "px-5", supportStyling: "px-5", contactStyling: "px-5", shopStyling: "px-5", loginStyling: "px-5 bg-blue-500 p-3" });
  function handleClick() {
    dispatch({ type: "CLICKED_ABOUT" });
  }

  return (
    <>
      <div className="relative">
        <img style={{ height: "800px", width: "100%" }} src={homePagePhoto} />
        <div className="absolute bottom-28 right-2/4">
          <h1 className="text-white  p-4 text-4xl font-bold">Water pollution needs a fast solution.</h1>
          <Link to="/about">
            <button className="bg-white text-[#19376D] bottom-14 left-5 mb-5 ml-5 p-4 text-2xl font-bold" onClick={handleClick}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <HomeMission />
      <HomeInfo />
    </>
  );
};

export default Home;
