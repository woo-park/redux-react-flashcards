import React, { Component } from "react";

import { MockDecks } from "./../../data/Mocks";

import { connect } from "react-redux";


import { addDeck, reviewDeck } from "./../../actions/creators";
import Deck from "./Deck";
import DeckCreation from "./DeckCreation";


class DecksScreen extends Component {
  static displayName = "DecksScreen";

 // static navigationOptions = { title: "All Decks" };

  // constructor(props) {
  //   super(props);
  //   this.state = { decks: MockDecks };
  // }

  _createDeck = (name) => {

    let createDeckAction = addDeck(name);
    this.props.createDeck(createDeckAction);

    console.warn("Data saving not implemented");

    // let goto = document.createElement('a')
    // goto.href = "/CardCreation"
    // goto.click()
  }

  _addCards = (deckID) => {
    console.warn("Data saving not implemented");
    // this.props.navigation.navigate("CardCreation");

    let goto = document.createElement('a')
    goto.href = "/CardCreation"
    goto.click()
  }

  _review = (deckID) => {
    this.props.reviewDeck(deckID);
    console.warn("Actual reviews not implemented");
    // this.props.navigation.navigate("Review");

    let goto = document.createElement('a')
    goto.href = "/Review"
    goto.click()
  }



  _mkDeckViews() {
    if (!this.props.decks) {
      return null;
    }

    return this.props.decks.map(deck => {
       return (
         <Deck
           deck={deck}
           count={this.props.counts[deck.id]}
           key={deck.id}
           add={() => {
             this._addCards(deck.id);
           }}
           review={() => {
             this._review(deck.id);
           }}
         />
       );
     });
  }

  render() {
    return (
      <div>
        {this._mkDeckViews()}
        <DeckCreation create = {this._createDeck}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deckAction => {
      alert('DISPATCHING??')
      dispatch(deckAction);
    },
    reviewDeck: deckID => {
      dispatch(reviewDeck(deckID));
    }
  };
};

const mapStateToProps = state => {
  console.warn('stateeeeeeee retrie', state)
  return {
    decks: state.decks,
    counts: state.decks.reduce(
      (sum, deck) => {
        sum[deck.id] = deck.cards.length;
        return sum;
      },
      {}
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen);
