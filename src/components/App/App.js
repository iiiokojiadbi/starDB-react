import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import PageContent from './../PageContent';
import SwapiService from './../../utils/SwapiService';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PageContent getData={this.swapiService.getAllPeople} />
        <PageContent getData={this.swapiService.getAllPlanets} />
        <PageContent getData={this.swapiService.getAllStarships} />
      </div>
    );
  }
}
