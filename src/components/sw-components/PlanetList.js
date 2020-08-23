import React from 'react';
import SwapiService from './../../utils/SwapiService';
import ChooseList from './../ChooseList';

const swapiService = new SwapiService();

const { getAllPlanets } = swapiService;

const renderPlanetItem = ({ name, birthYear }) => (
  <>
    <span className='choose__text'>{name}</span>
    <span className='choose__text'>Birth year: {birthYear}</span>
  </>
);

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

export { PlanetList };
