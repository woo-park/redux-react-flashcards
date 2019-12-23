import React, { Component } from "react";

import Button from "./../Button";
import NormalText from "./../NormalText";
import HeadingText from "./../HeadingText";

class ContinueButton extends Component {
  render() {
    let text = this.props.wasCorrect
      ? "Correct! Next card?"
      : "Oops, not quite. Next card?";
    return (
      <Button onPress={this.props.onPress} >
        <NormalText>{text}</NormalText>
      </Button>
    );
  }
}

function mkContinueQuitButtons(
  showingAnswer,
  wasCorrect,
  continueFunc,
  quitFunc
) {
  if (showingAnswer) {
    return <ContinueButton onClick={continueFunc} wasCorrect={wasCorrect} />;
  } else {
    return (
      <Button onClick={quitFunc} >
        <NormalText>Stop Reviewing</NormalText>
      </Button>
    );
  }
}

function mkAnswerButtons(
  answers,
  correctAnswer,
  showingAnswer,
  wasCorrect,
  selectAnswerFunc
) {
  if (!answers) return null;

  return answers.map(a => {
    let isCorrectAnswer = a === correctAnswer;
    
    return (
      <Button
        key={a}
        disabled={showingAnswer}

        onClick={() => {
          selectAnswerFunc(isCorrectAnswer);
        }}
      >
        <NormalText>
          {a}
        </NormalText>
      </Button>
    );
  });
}



export { mkContinueQuitButtons, mkAnswerButtons };
