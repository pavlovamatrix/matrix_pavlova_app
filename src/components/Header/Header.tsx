import './Header.css';
import React from 'react';
import Logo from '../../assets/logoPavlova.svg';

export const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="header_logo" src={Logo} alt="" />
      </a>
    </header>
  );
};
