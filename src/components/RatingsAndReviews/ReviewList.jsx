import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewListEntry from './ReviewListEntry.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <ReviewListEntry />
      </div>
    )
  }
}

export default ReviewList;