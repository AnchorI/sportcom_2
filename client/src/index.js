import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

import {Provider} from 'react-redux';

import createStore from "./store";
import { BrowserRouter } from 'react-router-dom';
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

