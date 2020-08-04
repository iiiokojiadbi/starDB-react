export default class SwapiService {
  _urlBase = 'https://swapi.dev/api';

  async getResource(url) {
    const response = await fetch(`${this._urlBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const body = await response.json();
    return body;
  }

  async getAllPeople() {
    const response = await this.getResource('/people/');
    return response.results.map(this._transformPerson);
  }

  async getAllPlanets() {
    const response = await this.getResource('/planets/');
    return response.results.map(this._transfomrPlanet);
  }

  async getAllStarships() {
    const response = await this.getResource('/starships/');
    return response.results.map(this._transformStarship);
  }

  async getPerson({ id }) {
    const personData = await this.getResource(`/people/${id}`);
    return this._transformPerson(personData);
  }

  async getPlanet({ id }) {
    const planetData = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planetData);
  }

  async getStarship({ id }) {
    const starshipData = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starshipData);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planetData) => {
    return {
      id: this._extractId(planetData),
      name: planetData.name,
      population: planetData.population,
      rotationPeriod: planetData.rotation_period,
      diameter: planetData.diameter,
    };
  };

  _transformStarship = (starshipData) => {
    return {
      id: this._extractId(starshipData),
      name: starshipData.name,
      model: starshipData.model,
      manufacturer: starshipData.manufacturer,
      costInCredits: starshipData.cost_in_credits,
      length: starshipData.length,
      crew: starshipData.crew,
      passengers: starshipData.passengers,
      cargoCapacity: starshipData.cargo_capacity,
    };
  };

  _transformPerson = (personData) => {
    return {
      id: this._extractId(personData),
      name: personData.name,
      gender: personData.gender,
      birthYear: personData.birth_year,
      eyeColor: personData.eye_color,
    };
  };
}
