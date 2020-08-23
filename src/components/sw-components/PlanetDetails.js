import React from 'react';
import SwapiService from './../../utils/SwapiService';
import ItemDetails, { Record } from './../ItemDetails';

const swapiService = new SwapiService();

const { getPlanet, getPlanetImage } = swapiService;

const PlanetDetails = ({ selectedItem }) => {
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
