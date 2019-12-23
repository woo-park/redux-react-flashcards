import React, {Component} from 'react';

class HeadingText extends Component {
  static displayName = 'HeadingText';

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default HeadingText;
