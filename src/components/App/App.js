import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import PageWithContent from './../PageWithContent';
import SwapiService from './../../utils/SwapiService';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PageWithContent
          getData={this.swapiService.getAllPeople}
          getDetails={this.swapiService.getPerson}
          getImageUrl={'characters'}
          renderItem={({ name, birthYear }) => (
            <>
              <span className="choose__text">{name}</span>
              <span className="choose__text">Birth Year: {birthYear}</span>
            </>
          )}
        ></PageWithContent>
        <PageWithContent
          getData={this.swapiService.getAllStarships}
          getDetails={this.swapiService.getStarship}
          getImageUrl={'starships'}
          renderItem={({ name, model }) => (
            <>
              <span className="choose__text">{name}</span>
              <span className="choose__text">Model: {model}</span>
            </>
          )}
        ></PageWithContent>
        <PageWithContent
          getData={this.swapiService.getAllPlanets}
          getDetails={this.swapiService.getPlanet}
          getImageUrl={'planets'}
          renderItem={({ name, population }) => (
            <>
              <span className="choose__text">{name}</span>
              <span className="choose__text">Population: {population}</span>
            </>
          )}
        ></PageWithContent>
      </div>
    );
  }
}
