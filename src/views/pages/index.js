import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Dashboard = React.lazy(() =>
  import('./dashboard')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
            <Route 
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            {/* <Route
              exacts
              strict
              path={`${match.url}/vote/address/:address`}
              render={({ match }) => {
                if (match.params.address) {
                  return (
                    <Details address={match.params.address} />
                  )
                } else {
                  return <Redirect to="/error" />
                }
              }}
            /> */}
            <Route 
              exacts
              strict
              path={`/error`}
              render={(props) => <Dashboard {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
