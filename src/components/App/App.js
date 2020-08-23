import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import { PeoplePage, PlanetPage, StarshipsPage } from './../sw-components';
import { SwapiProvider } from './../../context/SwapiServiceContext';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <RandomPlanet />
        <SwapiProvider>
          <PeoplePage />
          <PlanetPage />
          <StarshipsPage />
        </SwapiProvider>
      </div>
    );
  }
}
