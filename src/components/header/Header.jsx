import React from "react";
import "./header.css";
import Info from "./Info";
import me from "./../../../src/asserts/me.jpg";
import HeaderSocials from "./HeaderSocials";
import { AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h4>Hi, I'm</h4>
        <h1>Kasia</h1>
        <h4 className="text-light">Junior Web Developer</h4>
        <Info />
        <div className="me">
          <img className="img-shape" src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Dwon <AiOutlineArrowDown />
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
