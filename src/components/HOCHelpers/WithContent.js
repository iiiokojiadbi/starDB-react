import React, { Component } from 'react';
import './WithContent.scss';
import ErrorBoundry from './../ErrorBoundry';

const WithContent = (Details, List) => {
  return class extends Component {
    state = {
      selectedItem: 5,
    };

    handleItemSelectedId = (id) => {
      this.setState({
        selectedItem: id,
      });
    };

    render() {
      const { selectedItem } = this.state;
      return (
        <section className='page-content'>
          <ErrorBoundry>
            <List
              onItemSelected={this.handleItemSelectedId}
              selectedItem={selectedItem}
            />
            <Details selectedItem={selectedItem} />
          </ErrorBoundry>
        </section>
      );
    }
  };
};

export default WithContent;
