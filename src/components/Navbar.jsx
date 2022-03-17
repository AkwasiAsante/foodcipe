import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = ({ toggle }) => (
  <>
    <p>
      <Link
        className={""}
        to="/"
        onClick={() => {
          toggle(false);
        }}
      >
        Home
      </Link>
    </p>
    <p>
      <Link
        to="/recipes"
        onClick={() => {
          toggle(false);
        }}
      >
        Recipes
      </Link>
    </p>
    <p>
      <Link
        to="/blog"
        onClick={() => {
          toggle(false);
        }}
      >
        Blog
      </Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mts__navbar">
      <div className="links">
        <div className="logo">
          <Link to="/">
            F<span>oo</span>dCipe
          </Link>
        </div>
        <div className="links_cont">
          <Menu toggle={setToggleMenu} />
        </div>
      </div>

      <div className="login">
        <a className="button">Login</a>
      </div>

      <div className="menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="menu_container scale-up-center">
            <div className="links ">
              <Menu toggle={setToggleMenu} />
            </div>
            <div className="login">
              <a
                className="button"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
