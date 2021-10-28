import React from 'react';

const Answers = (props) => (
  <li>
    <div className="answer-body">
      {props.answer.body}
    </div>
  </li>
);

export default Answers;