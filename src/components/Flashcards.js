//root
//no css yet

import React, {Component} from 'react';

//importing components -> directories
import Heading from './Header';
import DeckScreen from './DeckScreen';
import NewCardScreen from './NewCardScreen';
import ReviewScreen from './ReviewScreen';

class Flashcards extends Component {
  _renderScene() {
    //return <ReviewScreen />
    //return <NewCardScreen />
    return <DeckScreen />
  }

  render() {
    return (
      <div style = {containerStyle}>
        <Heading />
        {/* Heading changes based on Component's static displayName */}

        {this._renderScene()}
        {/* returns <DeckScreen /> -> has decks & button */}
      </div>
    )
  }
}

const containerStyle = {
  flex:1
}

export default Flashcards;
