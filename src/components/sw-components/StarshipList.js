import React from 'react';
import SwapiService from './../../utils/SwapiService';
import ChooseList from './../ChooseList';

const swapiService = new SwapiService();

const { getAllStarships } = swapiService;

const renderStarshipItem = ({ name, model }) => (
  <>
    <span className='choose__text'>{name}</span>
    <span className='choose__text'>Model: {model}</span>
  </>
);

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

export { StarshipList };
