import React from 'react';
import moment from 'moment';

var isSeller = (name) => {
  return name.toLowerCase() === 'seller';
}

const Answers = (props) => (
  <li>
    <div className="answer-header">
      A: {props.answer.body}
    </div>
    <div className="answer-footer">
      <span>{isSeller(props.answer.answerer_name)
        ? <b>{props.answer.answerer_name}</b>
        : <p>{props.answer.answerer_name}</p>}
      </span>
      <span>  {moment(props.answer.date).format('MMMM D, YYYY')} |  </span>
      <span>Helpful? <u>Yes</u> ({props.answer.helpfulness})  |  </span>
      <span><u>Report</u></span>
    </div>
  </li>
);

export default Answers;
