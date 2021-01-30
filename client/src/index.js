import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux';
import AdminPage from './components/adminPage';
import createStore from "./store";
import { BrowserRouter,Switch,Route,Router } from 'react-router-dom';
import {createBrowserHistory} from 'history'
import CheckoutPage from "./containers/CategoryPage";
import MenuCart from "./containers/MenuCart";
import CategoryPage from "./containers/CategoryPage";
import {Container} from "semantic-ui-react";
const store = createStore();
const history = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>

              <Router history={history}>
              <Switch>
                  <Route history={history}  exact path='/' component={App}/>
                  <Route history={history} path='/admin' component={AdminPage}/>
                  <Route history={history} path='/CheckOut' component={CheckoutPage}/>
                  <Route  path='/category/:id' component={CategoryPage}/>

              </Switch>
                  <MenuCart/>
              </Router>

      </Provider>
    </React.StrictMode>,

  document.getElementById('root')
);

