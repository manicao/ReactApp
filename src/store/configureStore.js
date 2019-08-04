import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import alertReducer from '../reducers/alertReducer';
import listReducer from '../reducers/listReducer';
import filterReducer from '../reducers/filterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      alert:alertReducer,
      list:listReducer,
      filter:filterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
