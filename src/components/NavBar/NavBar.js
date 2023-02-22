import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navData = '1,/,All Nations,navlink+|+2,nations,by Name,navlink+|+3,region,by Region,navlink';

  const links = navData.split('+|+')
    .map((link) => {
      const [id, path, text, styleClass] = link.split(',');
      return (
        <li key={id} className="navItem">
          <NavLink to={path} className={styleClass}>
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
