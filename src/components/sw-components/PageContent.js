import React from 'react';
import PageWithContent from './../PageWithContent';
import SwapiService from './../../utils/SwapiService';
import { Record } from './../ItemDetails';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;

const StarshipPage = () => {
  return (
    <PageWithContent
      getData={getAllStarships}
      getDetails={getStarship}
      getImageUrl={getStarshipImage}
      renderItem={({ name, model }) => (
        <>
          <span className='choose__text'>{name}</span>
          <span className='choose__text'>Model: {model}</span>
        </>
      )}
    >
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
      <Record field='costInCredits' label='Cost in credits' />
    </PageWithContent>
  );
};

const PlanetPage = () => {
  return (
    <PageWithContent
      getData={getAllPlanets}
      getDetails={getPlanet}
      getImageUrl={getPlanetImage}
      renderItem={({ name, population }) => (
        <>
          <span className='choose__text'>{name}</span>
          <span className='choose__text'>Population: {population}</span>
        </>
      )}
    >
      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation period' />
      <Record field='diameter' label='Diameter' />
    </PageWithContent>
  );
};

const PersonPage = () => {
  return (
    <PageWithContent
      getData={getAllPeople}
      getDetails={getPerson}
      getImageUrl={getPersonImage}
      renderItem={({ name, birthYear }) => (
        <>
          <span className='choose__text'>{name}</span>
          <span className='choose__text'>Birth Year: {birthYear}</span>
        </>
      )}
    >
      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye color' />
      <Record field='birthYear' label='Birth Year' />
    </PageWithContent>
  );
};

export { PersonPage, PlanetPage, StarshipPage };
