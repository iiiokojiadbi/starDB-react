import React from 'react';
import ItemDetails, { Record } from './../ItemDetails';
import { useSwapi } from './../../context/SwapiServiceContext';

const StarshipDetails = ({ selectedItem }) => {
  const { getStarship, getStarshipImage } = useSwapi();

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
