import React from 'react';
import ChooseList from './../ChooseList';
import { useSwapi } from './../../context/SwapiServiceContext';

const renderPersonItem = ({ name, birthYear }) => (
  <>
    <span className='choose__text'>{name}</span>
    <span className='choose__text'>Birth year: {birthYear}</span>
  </>
);

const PersonList = ({ selectedItem, onItemSelected }) => {
  const { getAllPeople } = useSwapi();

  return (
    <ChooseList
      onItemSelected={onItemSelected}
      getData={getAllPeople}
      selectedItem={selectedItem}
      renderItem={renderPersonItem}
    />
  );
};

export { PersonList };
