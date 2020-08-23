import React from 'react';
import SwapiService from './../../utils/SwapiService';
import ItemDetails, { Record } from './../ItemDetails';

const swapiService = new SwapiService();

const { getStarship, getStarshipImage } = swapiService;

const StarshipDetails = ({ selectedItem }) => {
  return (
    <ItemDetails
      getDetails={getStarship}
      getImageUrl={getStarshipImage}
      selectedItem={selectedItem}
    >
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
      <Record field='costInCredits' label='Cost in credits' />
    </ItemDetails>
  );
};

export { StarshipDetails };
