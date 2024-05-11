import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import "./Footer.scss";

function Footer() {
  return (
    <div className="foter">
      <h3 className="text-sm tracking-wide">
        Made with <span>&#10084;</span> by Dipesh Yadav
      </h3>

      <a
        href="https://www.linkedin.com/in/yadav-dipesh/"
        rel="noreferrer"
        target="_blank"
      >
        <AiFillLinkedin className="cursor-pointer" />
      </a>

      <a
        href="https://github.com/dipeshyadav331"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineGithub className="cursor-pointer" />
      </a>
    </div>
  )
}

export default Footer