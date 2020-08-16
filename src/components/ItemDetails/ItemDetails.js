import React, { Component } from 'react';
import './ItemDetails.scss';
import SwapiService from './../../utils/SwapiService';

export const Record = ({ item, field, label }) => {
  return (
    <li className="details__list-item">
      <span className="details__text">
        {label}: {item[field]}
      </span>
    </li>
  );
};

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
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
    const { selectedItem, getDetails, getImageUrl } = this.props;
    if (!selectedItem) {
      return;
    }

    getDetails({ id: selectedItem }).then((item) => {
      this.setState({ item, image: getImageUrl({ id: selectedItem }) });
    });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <div className="person"></div>;
    }

    const { name } = item;

    return (
      <section className="details">
        <div className="details__wrapper">
          <img src={image} alt="" className="details__img" />
          <h2 className="details__title">{name}</h2>
          <ul className="details__list">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </section>
    );
  }
}
