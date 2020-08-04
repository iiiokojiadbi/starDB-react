import React, { Component } from 'react';
import './ChooseList.scss';
import Spinner from './../Spinner';

export default class ChooseList extends Component {
  state = {
    itemList: null,
    selectedItem: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { selectedItem } = this.props;
    if (selectedItem !== prevProps.selectedItem) {
      this.setState({
        selectedItem,
      });
    }
  }

  handleClickListItem(evt) {
    const { id } = evt.target;
    const { selectedItem } = this.state;

    if (selectedItem !== id) {
      this.setState({
        selectedItem: id,
      });
    }
  }

  renderItems(arr) {
    const { selectedItem } = this.state;

    return arr.map(({ id, name }) => {
      const isSelected = selectedItem === id;

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
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <section className="choose">
        <h2 className="choose__title">Choose a person from the list</h2>
        <ul className="choose__list">{items}</ul>
      </section>
    );
  }
}
