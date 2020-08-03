import React, { Component } from 'react';
import './ChooseList.scss';
import Spinner from './../Spinner';
import SwapiService from './../../utils/SwapiService';

export default class ChooseList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          key={`${id}`}
          className="choose__list-item"
          onClick={() => this.props.onItemSelectedId(id)}
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
