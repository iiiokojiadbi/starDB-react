import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Star DB</h1>
      <nav className='header__nav'>
        <NavLink
          exact
          to='/people/'
          className='header__link'
          activeClassName='header__link_active'
        >
          People
        </NavLink>
        <NavLink
          to='/planets/'
          className='header__link'
          activeClassName='header__link_active'
        >
          Planets
        </NavLink>
        <NavLink
          to='/starships/'
          className='header__link'
          activeClassName='header__link_active'
        >
          Starships
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
