import React from "react";

import { logo } from "../../assets/images.js";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="header__nav">
          <li>
            <a href="/overview">overview</a>
          </li>
          <li>
            <a href="/news">news</a>
          </li>
          <li>
            <a href="/champions">champions</a>
          </li>
          <li>
            <a href="/support">support</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
