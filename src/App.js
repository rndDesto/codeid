import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import pages from './pages';
import PageBase from './layout/PageBase';
import { Provider } from 'react-redux';

const rootPages = pages.map( (val, index) => {
  return <Route component={val.componentName} exact key={index} path={val.rootName} />;
});

const App = ({ store }) => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageBase>
          <Switch>
            {rootPages}
          </Switch>
        </PageBase>
      </BrowserRouter>
    </Provider>
  );
};


App.propTypes = {
  store: PropTypes.object.isRequired,
};
export default App;
