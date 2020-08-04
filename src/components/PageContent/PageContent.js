import React, { Component } from 'react';
import './PageContent.scss';
import ChooseList from './../ChooseList';
import PersonDetails from './../PersonDetails';
import ErrorIndicator from './../ErrorIndicator';

export default class PageContent extends Component {
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
      <section className="page-content">
        <ChooseList
          onItemSelected={this.handlePersonSelectedId}
          getData={this.props.getData}
          selectedItem={id}
        />
        <PersonDetails personId={id} />
      </section>
    );
  }
}
