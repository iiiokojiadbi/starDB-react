import React from 'react';
import ItemDetails, { Record } from './../ItemDetails';
import { useSwapi } from './../../context/SwapiServiceContext';

const PlanetDetails = ({ selectedItem }) => {
  const { getPlanet, getPlanetImage } = useSwapi();

  return (
    <ItemDetails
      getDetails={getPlanet}
      getImageUrl={getPlanetImage}
      selectedItem={selectedItem}
    >
      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation period' />
      <Record field='diameter' label='Diameter' />
    </ItemDetails>
  );
};

export { PlanetDetails };
