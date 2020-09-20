import React, { useState }  from 'react'
import { Link } from 'react-router-dom';

import Header from './Header';
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import './Navigation.css';

const Navigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] =useState(false);

  const openDrawerHandler = () =>{
    setDrawerIsOpen(true);
  }

  const closeDrawerHandler =()=>{
    setDrawerIsOpen(false);
  }

  return (
    <React.Fragment>
     <Header>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
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