import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import {Provider} from 'react-redux';

import createStore from "./store";
import { BrowserRouter, BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import MenuCart from "./containers/MenuCart";
import CheckoutPage from "./containers/CheckoutPage";
const store = createStore();


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />

          </BrowserRouter>
      </Provider>
    </React.StrictMode>,

  document.getElementById('root')
);

