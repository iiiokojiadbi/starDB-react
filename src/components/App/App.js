import React, { Component } from 'react';
import './../../fonts/PTSans.scss';
import './App.scss';
import Header from './../Header';
import RandomPlanet from './../RandomPlanet';
import PageWithContent from './../PageWithContent';
import SwapiService from './../../utils/SwapiService';
import { Record } from './../ItemDetails';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className='app'>
        <Header />
        <RandomPlanet />
        <PageWithContent
          getData={this.swapiService.getAllPeople}
          getDetails={this.swapiService.getPerson}
          getImageUrl={this.swapiService.getPersonImage}
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
        <PageWithContent
          getData={this.swapiService.getAllStarships}
          getDetails={this.swapiService.getStarship}
          getImageUrl={this.swapiService.getStarshipImage}
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
        <PageWithContent
          getData={this.swapiService.getAllPlanets}
          getDetails={this.swapiService.getPlanet}
          getImageUrl={this.swapiService.getPlanetImage}
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
      </div>
    );
  }
}
