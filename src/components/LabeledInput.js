import React, { Component } from "react";


import Input from "./Input";
import NormalText from "./NormalText";

class LabeledInput extends Component {
  render() {
    return (
      <div>
        <NormalText >
          {this.props.label}:
        </NormalText>
        <Input
          onEntry={this.props.onEntry}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}


export default LabeledInput;
