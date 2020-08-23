import React from 'react';
import SwapiService from './../../utils/SwapiService';
import ItemDetails, { Record } from './../ItemDetails';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;

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

export { PersonDetails, PlanetDetails, StarshipDetails };
