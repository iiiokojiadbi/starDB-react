import React, { Component } from 'react';
import './RandomPlanet.scss';
import Spinner from './../Spinner';
import ErrorIndicator from './../ErrorIndicator';
import SwapiService from './../../utils/SwapiService';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();
  }

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  onPlanetLoaded = (planetData) => {
    this.setState({ planet: planetData, loading: false, error: false });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 15);
    this.swapiService
      .getPlanet({ id })
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasNotData = !(loading || error);
    const errorIndicator = !error || <ErrorIndicator />;
    const spinner = !loading || <Spinner />;
    const content = !hasNotData || <PlanetView planet={planet} />;

    return (
      <section className="random-planet">
        {errorIndicator}
        {spinner}
        {content}
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
