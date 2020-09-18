import React, { useState }  from 'react'
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';

import './MainNavigation.css';

const MainNavigation = props => {
  
  return (
    <React.Fragment>
     

      <Header>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;