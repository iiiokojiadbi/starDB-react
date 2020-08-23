import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import { PersonPage, StarshipPage, PlanetPage } from './../sw-components';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <RandomPlanet />
        <PersonPage />
        <StarshipPage />
        <PlanetPage />
      </div>
    );
  }
}
