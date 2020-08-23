import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import { PeoplePage, PlanetsPage, StarshipsPage } from './../pages';
import { SwapiProvider } from './../../context/SwapiServiceContext';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <RandomPlanet />
        <Switch>
          <SwapiProvider>
            <Route exact path='/people/:id?'>
              <PeoplePage />
            </Route>
            <Route path='/planets/:id?'>
              <PlanetsPage />
            </Route>
            <Route path='/starships/:id?'>
              <StarshipsPage />
            </Route>
          </SwapiProvider>
        </Switch>
      </div>
    );
  }
}
