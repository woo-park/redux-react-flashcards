//root
//no css yet

import React, {Component} from 'react';

//importing components -> directories
import Heading from './Header';
import DeckScreen from './DeckScreen';
import NewCardScreen from './NewCardScreen';
import ReviewScreen from './ReviewScreen';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { reducer } from "../reducers/index";
import { readDecks } from "../storage/decks";
import { loadData } from "../actions/creators";


import { createStore } from "redux";

let store = createStore(reducer);


// On application start, read saved state from disk.
readDecks().then(decks => {
  store.dispatch(loadData(decks));
});

class Flashcards extends Component {
  _renderScene() {
    //return <ReviewScreen />
    //return <NewCardScreen />
    return <DeckScreen />
  }

  render() {
    return (
      <div style = {containerStyle}>

        <Router>
                <Heading />
                <Switch>
                    {/*anything that comes after won't work unless we have 'exact' keyword placed*/}

                    <Route exact path="/Home" component={DeckScreen} />

                    <Route exact path="/Review" component={ReviewScreen} />

                    <Route path="/CardCreation" component={NewCardScreen} />
                </Switch>
        </Router>

        {/* Heading changes based on Component's static displayName */}
        {/* returns <DeckScreen /> -> has decks & button */}
      </div>
    )
  }
}

const containerStyle = {
  flex:1
}

export default Flashcards;
