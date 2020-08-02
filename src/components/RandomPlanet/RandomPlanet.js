import React, { Component } from 'react';
import './RandomPlanet.scss';

import SwapiService from './../../utils/SwapiService';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 10 + 2);
    this.swapiService.getPlanet({ id }).then((planetData) => {
      this.setState({
        id: id,
        name: planetData.name,
        population: planetData.population,
        rotationPeriod: planetData.rotation_period,
        diameter: planetData.diameter,
      });
    });
  }

  com;

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;

    return (
      <section className="random-planet">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""
          className="random-planet__img"
        />
        <h2 className="random-planet__title">{name}</h2>
        <ul className="random-planet__list">
          <li className="random-planet__list-item">
            <span className="random-planet__text">
              Population: {population}
            </span>
          </li>
          <li className="random-planet__list-item">
            <span className="random-planet__text">
              Rotation period: {rotationPeriod}
            </span>
          </li>
          <li className="random-planet__list-item">
            <span className="random-planet__text">Diameter: {diameter}</span>
          </li>
        </ul>
      </section>
    );
  }
}
