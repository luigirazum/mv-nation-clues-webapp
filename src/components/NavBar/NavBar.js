import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navData = '1,/,All Nations+|+2,nations,by Name+|+3,region,by Region';

  const links = navData.split('+|+')
    .map((link) => {
      const [id, path, text] = link.split(',');
      return (
        <li key={id} className="navItem">
          <NavLink to={path} className="navLink">
            {text}
          </NavLink>
        </li>
      );
    });

  return (
    <>
      <nav className="navContainer">
        <ul className="navBar">
          {links}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
