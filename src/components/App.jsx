import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsView from './questions-answers/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <QuestionsView />
    );
  }
}

export default App;