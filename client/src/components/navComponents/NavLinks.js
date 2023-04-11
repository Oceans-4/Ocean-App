import { useLocation, Link } from "react-router-dom";
import { useReducer } from "react";
import { UPDATE_ACTIVE_PAGE } from "../../utils/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CLICKED_ABOUT":
      return {
        aboutStyling: "px-5 text-yellow-400 max-medium:p-3",
        supportStyling: "px-5 max-medium:p-3",
        contactStyling: "px-5 max-medium:p-3",
        shopStyling: "px-5 max-medium:p-3",
        loginStyling: "px-5 bg-blue-500 p-3",
      };
    case "CLICKED_SUPPORT":
      return {
        supportStyling: "px-5 text-yellow-400 max-medium:p-3",
        aboutStyling: "px-5 max-medium:p-3",
        contactStyling: "px-5 max-medium:p-3",
        shopStyling: "px-5 max-medium:p-3",
        loginStyling: "px-5 bg-blue-500 p-3",
      };
    case "CLICKED_CONTACT":
      return {
        contactStyling: "px-5 text-yellow-400 max-medium:p-3",
        supportStyling: "px-5 max-medium:p-3",
        aboutStyling: "px-5 max-medium:p-3",
        shopStyling: "px-5 max-medium:p-3",
        loginStyling: "px-5 bg-blue-500 p-3",
      };
    case "CLICKED_SHOP":
      return {
        shopStyling: "px-5 text-yellow-400 max-medium:p-3",
        supportStyling: "px-5 max-medium:p-3",
        contactStyling: "px-5 max-medium:p-3",
        aboutStyling: "px-5 max-medium:p-3",
        loginStyling: "px-5 bg-blue-500 p-3",
      };
    case "CLICKED_LOGIN":
      return {
        loginStyling: "px-5 text-yellow-400 bg-blue-500 p-3",
        supportStyling: "px-5 max-medium:p-3",
        contactStyling: "px-5 max-medium:p-3",
        shopStyling: "px-5 max-medium:p-3",
        aboutStyling: "px-5 max-medium:p-3",
      };
  }
};

const NavLinks = (props) => {
  const location = useLocation();

  const [state, dispatch] = useReducer(reducer, {
    aboutStyling: "px-5 max-medium:p-3",
    supportStyling: "px-5 max-medium:p-3",
    contactStyling: "px-5 max-medium:p-3",
    shopStyling: "px-5 max-medium:p-3",
    loginStyling: "px-5 bg-blue-500 p-3",
  });

  // if (location.pathname === "/about") {
  //   dispatch({ type: "CLICKED_ABOUT" });
  // }

  return (
    <ul className="flex flex-row max-medium:flex-col px-3 text-white pt-5  text-lg font-bold items-center">
      <Link to="/about">
        <li
          className={state.aboutStyling}
          onClick={() => {
            props.isMobile && props.closeMobileMenu() && dispatch({ type: "CLICKED_ABOUT" });
          }}
        >
          <a>About</a>
        </li>
      </Link>
      <Link to="/support">
        <li
          className={state.supportStyling}
          onClick={() => {
            props.isMobile && props.closeMobileMenu();
          }}
        >
          <a>Support</a>
        </li>
      </Link>
      <Link to="/shop">
        <li
          className={state.shopStyling}
          onClick={() => {
            props.isMobile && props.closeMobileMenu() && dispatch({ type: "CLICKED_SHOP" });
          }}
        >
          <a>Shop</a>
        </li>
      </Link>
      <Link to="/contact">
        <li
          className={state.contactStyling}
          onClick={() => {
            props.isMobile && props.closeMobileMenu() && dispatch({ type: "CLICKED_CONTACT" });
          }}
        >
          <a>Contact</a>
        </li>
      </Link>
      <Link to="/login">
        <li
          className={state.loginStyling}
          onClick={() => {
            props.isMobile && props.closeMobileMenu() && dispatch({ type: "CLICKED_LOGIN" });
          }}
        >
          <a>Login</a>
        </li>
      </Link>
    </ul>
  );
};

export default NavLinks;
