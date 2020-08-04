import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ChooseList from './../ChooseList';
import PersonDetails from './../PersonDetails';

export default class App extends Component {
  state = {
    selectedPerson: null,
  };

  handlePersonSelectedId = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson: id } = this.state;

    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <ChooseList
          onItemSelected={this.handlePersonSelectedId}
          selectedPerson={id}
        />
        <PersonDetails personId={id} />
      </div>
    );
  }
}
