import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from './ReviewList.jsx'
import ReviewBody from './ReviewBody.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <ReviewList />
      </div>
    )
  }
}

export default App;