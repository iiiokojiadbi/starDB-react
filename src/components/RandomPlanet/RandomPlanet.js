import React from 'react';
import './RandomPlanet.scss';

function RandomPlanet() {
  return (
    <section className="random-planet">
      <img
        src="https://www.ejin.ru/wp-content/uploads/2019/05/golubaja-planeta-zemlja-800x800.jpg"
        alt=""
        className="random-planet__img"
      />
      <h2 className="random-planet__title">Planet Name</h2>
      <ul className="random-planet__list">
        <li className="random-planet__list-item">
          <span className="random-planet__text">Population</span>
        </li>
        <li className="random-planet__list-item">
          <span className="random-planet__text">Rotation Period 43</span>
        </li>
        <li className="random-planet__list-item">
          <span className="random-planet__text">Diameter 100</span>
        </li>
      </ul>
    </section>
  );
}

export default RandomPlanet;
