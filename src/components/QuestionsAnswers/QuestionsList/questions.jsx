import React from 'react';
import axios from 'axios';
import Answers from './answers.jsx';
import AddAnswer from './../AddAnswer/index.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numAnswersDisplayed: 2
    };
    this.handleViewMoreAnswers = this.handleViewMoreAnswers.bind(this);
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleViewMoreAnswers(event) {
    event.preventDefault();
    let numDisplayed = this.state.numAnswersDisplayed;
    this.setState({
      numAnswersDisplayed: numDisplayed + 2
    });
  }

  displayLoadAnswers() {
    const numAnswers = Object.keys(this.props.question.answers).length;
    if (this.state.numAnswersDisplayed < numAnswers && this.state.numAnswers !== 0) {
      return (
        <div className="load-answer-container" onClick={this.handleViewMoreAnswers}>
          <span>
            <p className="load-answer-button">Load More Answers</p>
          </span>
        </div>
      );
    }
    return null;
  }

  handleHelpfulClick() {
    const id = { question_id: this.props.question.question_id}
    axios.put('/api/products/questions/helpful', id)
      .then(() => {this.props.getQuestions()})
      .catch(console.error);
  }

  handleReport() {
    const id = { question_id: this.props.question.question_id}
    axios.put('/api/products/questions/report', id)
      .then(() => {this.props.getQuestions()})
      .catch(console.error);
  }

  renderAnswerList() {
    const answers = Object.values(this.props.question.answers)
                          .slice(0, this.state.numAnswersDisplayed);
    if (answers.length === 0) {
      return null;
    }
    return (
      <div className="answers-list">
        <div className="qa-identifier">A:</div>
        <div className="answer">
          {answers.map(answer => (
            <Answers
              key={answer.id}
              answer={answer}
              getQuestions={this.props.getQuestions}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div
          key={this.props.question.question_id}
          className="question-body">
          <span className="question-header">
            <div className="qa-identifier">Q:</div>
            <div className="question-text">{this.props.question.question_body}</div>
          </span>
          <div className="reaction-container">
            <div className="left-reaction-container">
              <p>Helpful?&nbsp;
                <span
                  className="reaction-button"
                  onClick={this.handleHelpfulClick}
                >
                  Yes
                </span>
                &nbsp;({this.props.question.question_helpfulness})
              </p>
            </div>
            <AddAnswer
              questionId={this.props.question.question_id}
              getQuestions={this.props.getQuestions}
              />
            <span
              className="reaction-button report-container"
              onClick={this.handleReport}
              >Report</span>
          </div>
        </div>
        {this.renderAnswerList()}
        {this.displayLoadAnswers()}
      </>
    );
  }
}


export default Questions;
