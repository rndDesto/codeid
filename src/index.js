import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './redux/Store/Store';

const store = Store;

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);


