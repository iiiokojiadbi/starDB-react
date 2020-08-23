import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundry from './../ErrorBoundry';
import { PersonDetails, PersonList } from './../sw-components';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <section className='page-content'>
      <ErrorBoundry>
        <PersonList
          onItemSelected={(id) => {
            history.push(id);
          }}
          selectedItem={id}
        />
        <PersonDetails selectedItem={id} />
      </ErrorBoundry>
    </section>
  );
};

export default withRouter(PeoplePage);
