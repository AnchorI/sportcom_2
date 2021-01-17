import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {BrowserRouter} from "react-router-dom";
import MenuCart from './containers/MenuCart';
import 'semantic-ui-css/semantic.min.css'

import createStore from "./store";

import {Provider} from 'react-redux';


const store = createStore();

ReactDOM.render(

    <Provider store={store}>
        <App/>
        <MenuCart/>
    </Provider>,

    document.getElementById('root'));

