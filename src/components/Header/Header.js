import React from 'react';
import AppName from '../AppName/AppName';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => (
  <header className="appHeader">
    <AppName />
    <NavBar />
  </header>
);

export default Header;
