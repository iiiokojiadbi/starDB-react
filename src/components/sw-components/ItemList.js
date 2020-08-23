import React from 'react';
import SwapiService from './../../utils/SwapiService';
import ChooseList from './../ChooseList';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const renderPersonItem = ({ name, birthYear }) => (
  <>
    <span className='choose__text'>{name}</span>
    <span className='choose__text'>Birth year: {birthYear}</span>
  </>
);

const renderPlanetItem = ({ name, birthYear }) => (
  <>
    <span className='choose__text'>{name}</span>
    <span className='choose__text'>Birth year: {birthYear}</span>
  </>
);

const renderStarshipItem = ({ name, birthYear }) => (
  <>
    <span className='choose__text'>{name}</span>
    <span className='choose__text'>Birth year: {birthYear}</span>
  </>
);

const PersonList = ({ selectedItem, onItemSelected }) => {
  return (
    <ChooseList
      onItemSelected={onItemSelected}
      getData={getAllPeople}
      selectedItem={selectedItem}
      renderItem={renderPersonItem}
    />
  );
};

const PlanetList = ({ selectedItem, onItemSelected }) => {
  return (
    <ChooseList
      onItemSelected={onItemSelected}
      getData={getAllPlanets}
      selectedItem={selectedItem}
      renderItem={renderPlanetItem}
    />
  );
};

const StarshipList = ({ selectedItem, onItemSelected }) => {
  return (
    <ChooseList
      onItemSelected={onItemSelected}
      getData={getAllStarships}
      selectedItem={selectedItem}
      renderItem={renderStarshipItem}
    />
  );
};

export { PersonList, PlanetList, StarshipList };
