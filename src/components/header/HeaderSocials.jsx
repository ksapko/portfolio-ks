import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://github.com/ksapko" target="_blank">
        <AiOutlineGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/katarzyna-sapko-825aa8203/"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://www.instagram.com/kasia_sapko/" target="_blank">
        <AiOutlineInstagram />
      </a>
      <a href="https://www.facebook.com/kasia.sapko/" target="_blank">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
