import React from 'react';
import ItemDetails, { Record } from './../ItemDetails';
import { useSwapi } from './../../context/SwapiServiceContext';

const PersonDetails = ({ selectedItem }) => {
  const { getPerson, getPersonImage } = useSwapi();

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
