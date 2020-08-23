import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Star DB</h1>
      <nav className='header__nav'>
        <div href='#' className='header__link'>
          People
        </div>
        <div href='#' className='header__link'>
          Planets
        </div>
        <div href='#' className='header__link'>
          Starships
        </div>
      </nav>
    </header>
  );
}

export default Header;
