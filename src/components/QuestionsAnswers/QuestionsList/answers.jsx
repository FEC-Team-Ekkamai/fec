import React from 'react';
import moment from 'moment';
import axios from 'axios';

const Answers = (props) => {

  const id = {answer_id: props.answer.id}

  let handleHelpfulClick = (event) => {
    axios.put('/api/products/answers/helpful', id)
      .then(() => {props.getQuestions()})
      .catch(console.error);
  };

  let handleReport = (event) => {
    axios.put('/api/products/answers/report', id)
      .then(() => {props.getQuestions()})
      .catch(console.error);
  };

  let isSeller = (name) => {
    return name.toLowerCase() === 'seller';
  };

  return (
    <div className="answer-container">
      <div className="answer-body">
        <div className="answer-text">{props.answer.body}</div>
        <div className="answer-footer">
          <span className={
            isSeller(props.answer.answerer_name)
              ? 'seller user'
              : 'user '}>
            by {props.answer.answerer_name},&nbsp;
          </span>
          <span className="left-reaction-container">
            {moment(props.answer.date).format('MMMM D, YYYY')}
          </span>
          <span
            className="middle-reaction-container"
            onClick={handleHelpfulClick}
          >
            <p className="helpful-text">Helpful?&nbsp;
              <span className="reaction-button">Yes</span>
              &nbsp;({props.answer.helpfulness})
            </p>
          </span>
          <span className="report-container">
            <p
              className="reaction-button"
              onClick={handleReport}
            >
              Report
            </p>
          </span>
        </div>
        </div>
    </div>
  );
};

export default Answers;
