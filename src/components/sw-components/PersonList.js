import React from 'react';
import SwapiService from './../../utils/SwapiService';
import ChooseList from './../ChooseList';

const swapiService = new SwapiService();

const { getAllPeople } = swapiService;

const renderPersonItem = ({ name, birthYear }) => (
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

export { PersonList };
