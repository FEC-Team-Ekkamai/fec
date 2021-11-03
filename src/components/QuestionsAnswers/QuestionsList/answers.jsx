import React from 'react';
import moment from 'moment';

const Answers = (props) => (
  <li>
    <div className="answer-header">
      {props.answer.body}
    </div>
    <div className="answer-footer">
      <span>by {props.answer.answerer_name}, {moment(props.answer.date).format('MMMM D, YYYY')} |  </span>
      <span>Helpful? <u>Yes</u> ({props.answer.helpfulness})  |  </span>
      <span><u>Report</u></span>
    </div>
  </li>
);

export default Answers;
