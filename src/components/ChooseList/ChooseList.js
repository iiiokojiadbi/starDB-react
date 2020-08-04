import React, { Component } from 'react';
import './ChooseList.scss';
import Spinner from './../Spinner';
import SwapiService from './../../utils/SwapiService';

export default class ChooseList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
    selectedPerson: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { selectedPerson } = this.props;
    if (selectedPerson !== prevProps.selectedPerson) {
      this.setState({
        selectedPerson,
      });
    }
  }

  handleClickListItem(evt) {
    const { id } = evt.target;
    const { selectedPerson } = this.state;

    if (selectedPerson !== id) {
      this.setState({
        selectedPerson: id,
      });
    }
  }

  renderItems(arr) {
    const { selectedPerson } = this.state;

    return arr.map(({ id, name }) => {
      const isSelected = selectedPerson === id;

      return (
        <li
          key={`${id}`}
          id={`${id}`}
          className={`choose__list-item ${
            isSelected && 'choose__list-item_active'
          }`}
          onClick={(evt) => {
            this.props.onItemSelected(id);
            this.handleClickListItem(evt);
          }}
        >
          <span className="choose__text">{name}</span>
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <section className="choose">
        <h2 className="choose__title">Choose a person from the list</h2>
        <ul className="choose__list">{items}</ul>
      </section>
    );
  }
}
