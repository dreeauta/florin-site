import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import './index.css';

import productsContainer from './products/products';
import productsReducer from './products/products.reducer';
import contactContainer from './contact/contact';
import contactReducer from './contact/contact.reducer';
import adminContainer from './admin/admin';
import adminReducer from './admin/admin.reducer';

const reducer = Redux.combineReducers({
  products: productsReducer,
  contact: contactReducer,
  admin: adminReducer
})

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.compose(Redux.applyMiddleware(ReduxThunk))
)

class AppLayout extends React.Component {
  render() {
    return (
      <div className="appLayout"> 
        {this.props.children}
      </div>
    )
  }
}

const AppLayoutContainer = ReactRedux.connect(
  state => state
)(AppLayout);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayoutContainer}>
      <IndexRoute component={AppLayoutContainer}/>
      <Route path="/products" component={productsContainer}/>
      <Route path="/contact" component={contactContainer}/>
      <Route path="/admin123" component={adminContainer}/>
      
      </Route>
    </Router>
  </ReactRedux.Provider>,
 document.getElementById('root')
);
