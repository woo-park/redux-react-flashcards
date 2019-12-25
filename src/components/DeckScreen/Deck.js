import React, { Component } from "react";

import DeckModel from "./../../data/Deck";
import Button from "./../Button";
import NormalText from "./../NormalText";

class Deck extends Component {
  static displayName = "Deck";

  _review = () => {
    console.warn("_review Not implemented");
    this.props.review();  //giving err -> trace up
  };

  _addCards = () => {
    console.warn("_addCards Not implemented");
    this.props.add(); //hm nothing happening here

  };

  render() {
    return (
      <div>

        <Button onPress={this._review}>
          <NormalText>
            {this.props.deck.name}: {this.props.count} cards
          </NormalText>
        </Button>

        <Button onPress={this._addCards}>
          <NormalText>+</NormalText>
        </Button>
      </div>
    );
  }
}

export default Deck;
