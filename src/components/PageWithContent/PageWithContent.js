import React, { Component } from 'react';
import './PageWithContent.scss';
import ChooseList from './../ChooseList';
import ErrorBoundry from './../ErrorBoundry';


const PageWithContent = ({ ItemListComponent, DetailsComponent }) => {
  class PageContent extends Component {
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

      return (
        <section className="page-content">
          <ErrorBoundry>
            <ChooseList
              onItemSelected={this.handlePersonSelectedId}
              getData={this.props.getData}
              selectedItem={id}
              ItemListComponent={ItemListComponent}
            />
          </ErrorBoundry>
          <ErrorBoundry>
            <DetailsComponent selectedItem={id} />
          </ErrorBoundry>
        </section>
      );
    }
  }

  return PageContent;
};

export default PageWithContent;
