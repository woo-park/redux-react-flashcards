import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _create = () => {
    this.props.onEntry(this.state.text);
    this.setState({ text: ''});   //emptying out
  }

  _onSubmit = ev => {
    console.warn('clicked')
    console.warn(this.props)
    this.props.onEntry(ev.target.text);
    if (this.props.clearOnSubmit) {
      this.setState({ text: ''});
    }
  }

  _onChange = ev => {
    console.warn('on change => ',ev.target.value)

    this.setState({ text: ev.target.value});
    if (this.props.onChange) {
      this.props.onChange(ev.target.value);
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this._onChange}
          onSubmit = {this._onSubmit}
        />


      </div>
    )
  }
}

export default Input;
