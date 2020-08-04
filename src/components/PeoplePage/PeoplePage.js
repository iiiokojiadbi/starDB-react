import React, { Component } from 'react';
import './PeoplePage.scss';
import ChooseList from './../ChooseList';
import PersonDetails from './../PersonDetails';
import ErrorIndicator from './../ErrorIndicator';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 1,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  handlePersonSelectedId = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const { selectedPerson: id } = this.state;

    return (
      <section className="people-page">
        <ChooseList
          onItemSelected={this.handlePersonSelectedId}
          selectedPerson={id}
        />
        <PersonDetails personId={id} />
      </section>
    );
  }
}
