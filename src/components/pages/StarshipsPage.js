import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundry from './../ErrorBoundry';
import { StarshipDetails, StarshipList } from './../sw-components';

const StarshipsPage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <section className='page-content'>
      <ErrorBoundry>
        <StarshipList
          onItemSelected={(id) => {
            history.push(id);
          }}
          selectedItem={id}
        />
        <StarshipDetails selectedItem={id} />
      </ErrorBoundry>
    </section>
  );
};

export default withRouter(StarshipsPage);
