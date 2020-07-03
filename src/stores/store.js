import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
// import { createBrowserHistory } from 'history';
// import timerMiddleware from 'redux-timer';
// import {
//   requestInterceptors,
//   responseInterceptors
// } from 'utils/middlewares/interceptors';
// import authMiddlewares from 'utils/middlewares/authMiddleware';
import createRootReducer from './reducers';

// requestInterceptors();
// responseInterceptors();

// export const history = createBrowserHistory({
//   basename: process.env.REACT_APP_ROUTER_BASE || ''
// });

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  // routerMiddleware(history),
  // authMiddlewares,
  // timerMiddleware
];

if (process.env.NODE_ENV === 'development') {
/* eslint-disable */
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  /* eslint-enable */

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  createRootReducer,
  initialState,
  composedEnhancers
);

// history.listen((location, action) => {
//   window.scrollTo(0, 0);
// });

export default store;
