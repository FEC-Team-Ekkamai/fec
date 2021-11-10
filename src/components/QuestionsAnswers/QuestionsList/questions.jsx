import React from 'react';
import Answers from './answers.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numAnswersDisplayed: 2
    };
    this.handleViewMoreAnswers = this.handleViewMoreAnswers.bind(this);
  }

  handleViewMoreAnswers(event) {
    event.preventDefault();
    let numDisplayed = this.state.numAnswersDisplayed;
    this.setState({
      numAnswersDisplayed: numDisplayed + 2
    })
  }

  displayLoadAnswers() {
    const numAnswers = Object.keys(this.props.question.answers).length;
    if (this.state.numAnswersDisplayed < numAnswers && this.state.numAnswers !== 0) {
      return (
        <span onClick={this.handleViewMoreAnswers}>
          <b>Load More Answers</b>
        </span>
      );
    }
    return null;
  }

  render() {
    const answers = Object.values(this.props.question.answers)
                          .slice(0, this.state.numAnswersDisplayed);
    return (
      <li key={this.props.question.question_id}>
        <div className="question-body">
          <span className="question-header">
            <b>Q: {this.props.question.question_body}</b>
          </span>
          <span>   Helpful? <u>Yes</u> ({this.props.question.question_helpfulness}) |</span>
        </div>
        <div className="answer-container">
          <ul>
            {answers.map(answer => (
              <Answers key={answer.id} answer={answer} />
            ))}
          </ul>
          <div>
            {this.displayLoadAnswers()}
          </div>
        </div>
      </li>
    );
  }
}


export default Questions;
