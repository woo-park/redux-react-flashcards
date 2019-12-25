import React, { Component } from "react";

import Button from "./../Button";
import NormalText from "./../NormalText";
import Input from "./../Input";


class CreateDeckButton extends Component {
  render() {
    return (
      <Button onPress={this.props.onPress}>
        <NormalText>Create Deck</NormalText>
      </Button>
    );
  }
}

class EnterDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _create = () => {
    this.props.create(this.state.text);
  };

  render() {
    return (
      <div>
        <Input
          onEntry={this.props.create}
          onChange={text => {
            console.warn('grabbing text from input after submit', text)
            this.setState({ text });
          }}
        />
        <CreateDeckButton onPress={this._create} />
      </div>
    );
  }
}


export { CreateDeckButton, EnterDeck };
