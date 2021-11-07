import React from 'react';
import Answers from './answers.jsx';

const Questions = (props) => (
  <li key={props.question.question_id}>
    <div className="question-body">
      <span className="question-header">
        <b>Q: {props.question.question_body}</b>
      </span>
      <span>   Helpful? <u>Yes</u> ({props.question.question_helpfulness}) | <u>Add an Answer</u></span>
    </div>
    <div className="answer-container">
      <ul>
        {Object.values(props.question.answers).map((answer, index) => (
          index < 2 ? <Answers key={answer.id} answer={answer} /> : null
        ))}
      </ul>
      <div>
        {Object.keys(props.question.answers).length > 0
          ? <b>Load More Answers</b>
          : null}
      </div>
    </div>
  </li>
);

export default Questions;
