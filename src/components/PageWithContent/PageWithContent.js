import React, { Component } from 'react';
import './PageWithContent.scss';
import ChooseList from './../ChooseList';
import ErrorBoundry from './../ErrorBoundry';

export default class PageWithContent extends Component {
  state = {
    selectedPerson: 1,
  };

  handlePersonSelectedId = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson: id } = this.state;
    const { children } = this.props;

    return (
      <section className="page-content">
        <ErrorBoundry>
          <ChooseList
            onItemSelected={this.handlePersonSelectedId}
            getData={this.props.getData}
            selectedItem={id}
            renderItem={this.props.renderItem}
          />
        </ErrorBoundry>
        {/* <ErrorBoundry></ErrorBoundry> */}
      </section>
    );
  }
}
