import React, { Component } from 'react';
import './RandomPlanet.scss';
import Spinner from './../Spinner';
import SwapiService from './../../utils/SwapiService';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    planet: {},
    loading: true,
  };

  onPlanetLoaded = (planetData) => {
    this.setState({ planet: planetData, loading: false });
  };

  onError = (err) => {};

  updatePlanet() {
    const id = Math.floor(Math.random() * 10 + 2);
    this.swapiService
      .getPlanet({ id })
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading } = this.state;

    return (
      <section className="random-planet">
        {loading ? <Spinner /> : <PlanetView planet={planet} />}
      </section>
    );
  }
}

function PlanetView({ planet }) {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
        className="random-planet__img"
      />
      <h2 className="random-planet__title">{name}</h2>
      <ul className="random-planet__list">
        <li className="random-planet__list-item">
          <span className="random-planet__text">Population: {population}</span>
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
    </>
  );
}
