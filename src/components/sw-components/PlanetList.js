import React from 'react';
import ChooseList from './../ChooseList';
import { useSwapi } from './../../context/SwapiServiceContext';

const renderPlanetItem = ({ name, birthYear }) => (
  <>
    <span className='choose__text'>{name}</span>
    <span className='choose__text'>Birth year: {birthYear}</span>
  </>
);

const PlanetList = ({ selectedItem, onItemSelected }) => {
  const { getAllPlanets } = useSwapi();

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
