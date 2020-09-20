import React, { useState }  from 'react'
import { Link } from 'react-router-dom';

import Header from './Header';
import NavLinks from './NavLinks'
import './Navigation.css';

const Navigation = props => {
  
  return (
    <React.Fragment>
     <Header>
        <button className="main-navigation__menu-btn" >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Note Taker</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default Navigation;