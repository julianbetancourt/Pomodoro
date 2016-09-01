import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './sass/main.sass';
import configStore from './store/configStore';
import { Provider } from 'react-redux';

const store = configStore();



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
