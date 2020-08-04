import React, { Component } from 'react';
import './PageWithContent.scss';
import ChooseList from './../ChooseList';
import ErrorIndicator from './../ErrorIndicator';

const PageWithContent = ({ ItemListComponent, DetailsComponent }) => {
  class PageContent extends Component {
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
            ItemListComponent={ItemListComponent}
          />
          <DetailsComponent selectedItem={id} />
        </section>
      );
    }
  }

  return PageContent;
};

export default PageWithContent;
