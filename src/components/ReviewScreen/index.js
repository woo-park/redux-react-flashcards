import React, {Component} from 'react';

import ViewCard from './ViewCard';
import { MockReviews } from './../../data/Mocks';
import { mkReviewSummary } from './ReviewSummary';

class ReviewScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      numReviewed: 0,
      numCorrect: 0,
      currentReview: 0,     //number of current stage
      reviews: MockReviews
    }
  }

  onReview = correct => {
    if (correct) {
      this.setState({numCorrect: this.state.numCorrect + 1});
    }
    this.setState({numReviewed: this.state.numReviewed + 1});
  }

  _nextReview = () => {
    this.setState({currentReview: this.state.currentReview + 1});
  }

  _quitReviewing = () => {
    console.warn('not implemented');
  }

  _contents() {
    if (!this.state.reviews || this.state.reviews.length === 0) {
      return null;
    }

    // if there is any left
    if (this.state.currentReview < this.state.reviews.length) {
      return (
        <ViewCard
            onReview = {this.onReview}
            continue = {this._nextReview}
            quit = {this._quitReviewing}
            {...this.state.reviews[this.state.currentReview]}
        />
      )
    } else {
      let percent = this.state.numCorrect / this.state.numReviewed;
      return mkReviewSummary(percent, this._quitReviewing);
    }

  }

  render () {
    return (
      <div>
        {this._contents()}
      </div>
    )
  }
}

export default ReviewScreen;
