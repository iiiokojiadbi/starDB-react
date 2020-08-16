import React, { Component } from 'react';
import './ItemDetails.scss';
import SwapiService from './../../utils/SwapiService';

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { selectedItem } = this.props;
    if (selectedItem !== prevProps.selectedItem) {
      this.updateItem();
    }
  }

  updateItem() {
    const { selectedItem } = this.props;
    if (!selectedItem) {
      return;
    }

    this.swapiService.getPerson({ id: selectedItem }).then((item) => {
      this.setState({ item });
    });
  }

  render() {
    const { item } = this.state;

    if (!item) {
      return <div className="person"></div>;
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <section className="details">
        <div className="details__wrapper">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt=""
            className="details__img"
          />
          <h2 className="details__title">{name}</h2>
          <ul className="details__list">
            <li className="details__list-item">
              <span className="details__text">Gender: {gender}</span>
            </li>
            <li className="details__list-item">
              <span className="details__text">Birth Year: {birthYear}</span>
            </li>
            <li className="details__list-item">
              <span className="details__text">Eye Color: {eyeColor}</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
