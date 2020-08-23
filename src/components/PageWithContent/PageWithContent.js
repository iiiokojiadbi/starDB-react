import React, { Component } from 'react';
import './PageWithContent.scss';
import ChooseList from './../ChooseList';
import ErrorBoundry from './../ErrorBoundry';
import ItemDetails from './../ItemDetails';

export default class PageWithContent extends Component {
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
          <ChooseList
            onItemSelected={this.handleItemSelectedId}
            getData={this.props.getData}
            selectedItem={selectedItem}
            renderItem={this.props.renderItem}
          />
        </ErrorBoundry>
        <ErrorBoundry>
          <ItemDetails
            getDetails={this.props.getDetails}
            getImageUrl={this.props.getImageUrl}
            selectedItem={selectedItem}
          >
            {this.props.children}
          </ItemDetails>
        </ErrorBoundry>
      </section>
    );
  }
}
