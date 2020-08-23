import React from 'react';
import SwapiService from './../../utils/SwapiService';
import ItemDetails, { Record } from './../ItemDetails';

const swapiService = new SwapiService();

const { getPerson, getPersonImage } = swapiService;

const PersonDetails = ({ selectedItem }) => {
  return (
    <ItemDetails
      getDetails={getPerson}
      getImageUrl={getPersonImage}
      selectedItem={selectedItem}
    >
      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye color' />
      <Record field='birthYear' label='Birth Year' />
    </ItemDetails>
  );
};

export { PersonDetails };
