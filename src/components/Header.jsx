import React from 'react';
import logo from '../asset/image/oz_icon.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header>
        <a href="/">
          <img src={logo}></img>
        </a>
        <h2>퀴즈퀴즈</h2>
        <div>
          <img src={logo}></img>
        </div>
      </header>
    </div>
  );
};

export default Header;
