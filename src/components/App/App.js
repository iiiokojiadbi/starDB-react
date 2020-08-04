import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import PageWithContent from './../PageWithContent';
import PersonDetails from './../PersonDetails';
import ItemListPerson from './../ItemListPerson';
import SwapiService from './../../utils/SwapiService';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const PageWithPeople = PageWithContent({
      ItemListComponent: ItemListPerson,
      DetailsComponent: PersonDetails,
    });

    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <PageWithPeople getData={this.swapiService.getAllPeople} />
      </div>
    );
  }
}
