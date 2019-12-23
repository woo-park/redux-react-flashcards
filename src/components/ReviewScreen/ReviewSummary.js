import React, { Component } from "react";

import HeadingText from "./../HeadingText";
import NormalText from "./../NormalText";
import Button from "./../Button";

function mkReviewSummary(percentCorrect, quitFunc) {
  return (
    <div >
      <HeadingText >
        Reviews cleared!
      </HeadingText>
      <NormalText >
        {Math.round(percentCorrect * 100)}% correct
      </NormalText>
      <Button onPress={quitFunc} >
        <NormalText>Done</NormalText>
      </Button>
    </div>
  );
}


export { mkReviewSummary };
