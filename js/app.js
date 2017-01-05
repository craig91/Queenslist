import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from './store/configureStore';

// react components
import Main from './components/Main';
import BuyComponent from './components/BuyComponent';



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Buy}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react')
  );
