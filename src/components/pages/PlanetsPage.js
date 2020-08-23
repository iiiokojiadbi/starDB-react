import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundry from './../ErrorBoundry';
import { PlanetDetails, PlanetList } from './../sw-components';

const PlanetsPage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <section className='page-content'>
      <ErrorBoundry>
        <PlanetList
          onItemSelected={(id) => {
            history.push(id);
          }}
          selectedItem={id}
        />
        <PlanetDetails selectedItem={id} />
      </ErrorBoundry>
    </section>
  );
};

export default withRouter(PlanetsPage);
