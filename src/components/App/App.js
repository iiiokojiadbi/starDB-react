import React from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import ChooseList from './../ChooseList';
import PersonDetails from './../PersonDetails';

function App() {
  return (
    <div className="app">
      <Header />
      <RandomPlanet />
      <ChooseList />
      <PersonDetails />
    </div>
  );
}

export default App;
