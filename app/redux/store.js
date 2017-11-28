/**
* The required modules
*/
import {createStore,combineReducers,applyMiddleware} from 'redux';
/**
* The reducers
*/
import albumReducer from 'redux/reducers/albumReducer';
/**
* The middleware
*/
import logger from 'redux-logger';
/**
* The store
*/
const store = createStore(
  combineReducers(
    {
      albums:albumReducer
    }
  ),
  {},
  applyMiddleware(logger)
);
export default store;
