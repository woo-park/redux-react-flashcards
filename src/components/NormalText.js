import React, {Component} from 'react';

class NormalText extends Component {
  static displayName = 'NormalText';

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default NormalText;
