import React from 'react';
import { Link } from 'react-router-dom';
import './AppName.css';

const AppName = () => (
  <div className="appName">
    <Link to="/" className="titleLink">
      Nati
      <div className="appLogo" />
      nClues
    </Link>
  </div>
);

export default AppName;
