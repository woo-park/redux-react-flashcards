import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import allReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//combines reducers
import Flashcards from './components/Flashcards'

import { reducer } from "./reducers/index";


function logger({ getState }) {
  return next => action => {
    console.log('in middleWare')
    console.log('will dispatch', action);
    console.log(action.data);

    const returnValue = next(action);
    // its not being updated
    console.log('state after dispatch', getState().decks[0].cards);


    return returnValue
  }
}

const store = createStore(reducer,applyMiddleware(logger));





ReactDOM.render(
  <Provider store = {store}>

      {/*<App />*/}
      <Flashcards />
  </Provider>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
