import React from "react";
import "./header.css";
import Info from "./Info";
import me from "./../../../src/asserts/me.jpg";
import HeaderSocials from "./HeaderSocials";
// import { AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h3>Hi, I'm</h3>
        <h1>Kasia</h1>
        <h3 className="text-light">Junior Web Developer</h3>
        <Info />
        <HeaderSocials />
        <div className="me">
          <img className="img-shape" src={me} alt="me" />
        </div>
        {/* <a href="#contact" className="scroll-down">
          Scroll Dwon <AiOutlineArrowDown />
        </a> */}
      </div>
    </header>
  );
};

export default Header;
