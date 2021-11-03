import React from 'react';
import Answers from './answers.jsx';

const Questions = (props) => (
  <li key={props.question.question_id}>
    <div className="question-body">
      <span className="question-header">
        <b>{props.question.question_body}</b>
      </span>
      <span className="">   Helpful? <u>Yes</u> ({props.question.question_helpfulness}) | <u>Add an Answer</u></span>
    </div>
    <div className="answer-container">
      <ul>
        {Object.values(props.question.answers).map(answer => (
          <Answers key={answer.id} answer={answer} />
        ))}
      </ul>
    </div>

  </li>
);

export default Questions;
