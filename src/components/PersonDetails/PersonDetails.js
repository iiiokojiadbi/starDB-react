import React, { Component } from 'react';
import './PersonDetails.scss';
import SwapiService from './../../utils/SwapiService';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    const { selectedItem } = this.props;
    if (selectedItem !== prevProps.selectedItem) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { selectedItem } = this.props;
    if (!selectedItem) {
      return;
    }

    this.swapiService.getPerson({ id: selectedItem }).then((person) => {
      this.setState({ person });
    });
  }

  render() {
    const { person } = this.state;

    if (!person) {
      return <div className="person"></div>;
    }

    const { id, name, gender, birthYear, eyeColor } = person;

    return (
      <section className="person">
        <div className="person__wrapper">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt=""
            className="person__img"
          />
          <h2 className="person__title">{name}</h2>
          <ul className="person__list">
            <li className="person__list-item">
              <span className="person__text">Gender: {gender}</span>
            </li>
            <li className="person__list-item">
              <span className="person__text">Birth Year: {birthYear}</span>
            </li>
            <li className="person__list-item">
              <span className="person__text">Eye Color: {eyeColor}</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
