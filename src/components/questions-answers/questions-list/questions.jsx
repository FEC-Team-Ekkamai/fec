import React from 'react';
import Answers from './answers.jsx';

const Questions = (props) => (
  <li key={props.question.question_id}>
    <div className="question-body">
      {props.question.question_body}
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