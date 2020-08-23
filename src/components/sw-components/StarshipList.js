import React from 'react';
import ChooseList from './../ChooseList';
import { useSwapi } from './../../context/SwapiServiceContext';

const renderStarshipItem = ({ name, model }) => (
  <>
    <span className='choose__text'>{name}</span>
  </>
);

const StarshipList = ({ selectedItem, onItemSelected }) => {
  const { getAllStarships } = useSwapi();

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
