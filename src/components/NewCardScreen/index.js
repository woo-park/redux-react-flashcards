import React, {Component} from 'react';



import Button from '../Button';
import LabeledInput from '../LabeledInput';
import NormalText from '../NormalText';
// import colors from './../../styles/colors';

import DeckModel from './../../data/Deck';
import { addCard } from "./../../actions/creators";
import { connect } from "react-redux";


class NewCard extends Component {
  static initialState = { front: "", back: "" };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  _deckID = () => {

    // return this.props.navigation.state.params.deckID;
    // can't send the deckid with params bc... not using navigation -> but prolly use sessions maybe? if neccessary
    return 'tempId'
  };
  // static navigationOptions = { title: "Create Card" };

  _handleFront = text => {
    this.setState({ front: text });
  }

  _handleBack = text => {
    this.setState({ back: text });
  }

  _createCard = () => {
    console.warn()
    console.warn(this.state.front, this.state.back)
    console.warn()

    this.props.createCard(this.state.front, this.state.back, this._deckID());

    // console.warn('Not implemented');          //checkpoint1
    // console.warn("Data saving not implemented"); //checkpoint2
    let goto = document.createElement('a')
    goto.href = "/CardCreation"
    goto.click()
  }

  _reviewDeck = () => {
    // console.warn('Not implemented');

    let goto = document.createElement('a')
    goto.href = "/Review"
    goto.click()
  }

  _doneCreating = () => {
    // console.warn('Not implemented');

    let goto = document.createElement('a')
    goto.href = "/Home"
    goto.click()
  }

  render() {
    return (
      <div>
          <LabeledInput
            label = 'Front'
            onEntry = {this._handleFront}
            onChange = {this._handleFront}
          />
          <LabeledInput
            label = 'Back'
            onEntry = {this._handleBack}
            onChange = {this._handleBack}
          />
          <Button onPress = {this._createCard}>
              <NormalText>Create Card</NormalText>
          </Button>

          <div>
              <Button onPress = {this._doneCreating}>
                  <NormalText>Done</NormalText>
              </Button>

              <Button onPress = {this._reviewDeck}>
                  <NormalText>Review Deck</NormalText>
              </Button>
          </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { decks: state.decks };
};

const mapDispatchToProps = dispatch => {
  return {
    createCard: (front, back, deckID) => {
      dispatch(addCard(front, back, deckID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
