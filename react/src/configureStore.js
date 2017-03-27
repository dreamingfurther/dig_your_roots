import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import emailConfirmation from './reducers/emailConfirmation';
import showDetails from './reducers/showDetails';
import showSignInForm from './reducers/showSignInForm';

let configureStore = () => {
  let store = createStore(
    combineReducers({
      showDetails,
      emailConfirmation,
      showSignInForm,
      form: formReducer,
      routing: routerReducer
    }),
    applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
  )

  return store
};

export default configureStore;
