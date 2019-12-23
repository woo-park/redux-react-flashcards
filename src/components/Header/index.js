import React, { Component } from "react";


import HeadingText from "./../HeadingText";

class Header extends Component {
  static displayName = "Header";

  render() {
    return (
      <div >
        <HeadingText>FLASHCARDS</HeadingText>
      </div>
    );
  }
}

export default Header;
