import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import PageWithContent from './../PageWithContent';
import PersonDetails from './../PersonDetails';
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
          renderItem={({ name, birthYear }) => (
            <>
              <span className="choose__text">{name}</span>
              <span className="choose__text">Birth Year: {birthYear}</span>
            </>
          )}
        >
          {/* <PersonDetails /> */}
        </PageWithContent>
      </div>
    );
  }
}
