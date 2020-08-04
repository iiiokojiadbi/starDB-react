import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import PeoplePage from './../PeoplePage';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
