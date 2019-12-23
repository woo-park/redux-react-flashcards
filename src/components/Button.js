import React, {Component} from 'react';
class Button extends Component{
  static displayName = 'Button';
  render() {
    let opacity = this.props.disabled ? 1 : 0.5;
    return (
      <button
        onClick = {this.props.onPress}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button;
