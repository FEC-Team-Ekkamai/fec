import React from 'react';
import moment from 'moment';

var isSeller = (name) => {
  return name.toLowerCase() === 'seller';
}

const Answers = (props) => (
  <li>
    <div className="answer-container">
      <div className="answer-identifier">A:</div>
      <div className="answer-body">
        <div className="answer-text">{props.answer.body}</div>
        <div className="answer-footer">
          <span>{isSeller(props.answer.answerer_name)
            ? <b>{props.answer.answerer_name}</b>
            : <p>{props.answer.answerer_name}</p>}
          </span>
          <span>  {moment(props.answer.date).format('MMMM D, YYYY')} |  </span>
          <span>Helpful? <u>Yes</u> ({props.answer.helpfulness})  |  </span>
          <span><u>Report</u></span>
        </div>
        </div>
    </div>
  </li>
);

export default Answers;
