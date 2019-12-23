import React, {Component} from 'react';

import DeckModel from './../../data/Deck';

import Button from '../Button';
import LabeledInput from '../LabeledInput';
import NormalText from '../NormalText';
// import colors from './../../styles/colors';

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { front: '',
                   back: ''
                  }
  }

  _handleFront = text => {
    this.setState({ front: text });
  }

  _handleBack = text => {
    this.setState({ back: text });
  }

  _createCard = () => {
    console.warn('Not implemented');
  }

  _reviewDeck = () => {
    console.warn('Not implemented');
  }

  _doneCreating = () => {
    console.warn('Not implemented');
  }

  render() {
    return (
      <div>
          <LabeledInput
            label = 'Front'
            onChange = {this._handleFront}
          />
          <LabeledInput
            label = 'Front'
            onChange = {this._handleFront}
          />
          <Button
            onClick = {this._createCard}
          >
              <NormalText>Done</NormalText>
          </Button>

          <Button
            onClick = {this._reviewDeck}
          >
              <NormalText>Review Deck</NormalText>
          </Button>
      </div>
    )
  }
}

export default NewCard;
