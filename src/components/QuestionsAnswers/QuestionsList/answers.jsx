import React from 'react';
import moment from 'moment';
import axios from 'axios';

const Answers = (props) => {

  const id = {answer_id: props.answer.id}

  let handleHelpfulClick = (event) => {
    axios.put('/api/products/answers/helpful', id)
      .then(() => console.log('success'))
      .catch(console.error);
  };

  let handleReport = (event) => {
    axios.put('/api/products/answers/report', id)
      .then(() => console.log('success'))
      .catch(console.error);
  };

  let isSeller = (name) => {
    return name.toLowerCase() === 'seller';
  };

  return (
    <li>
      <div className="answer-container">
        <div className="answer-body">
          <div className="answer-text">{props.answer.body}</div>
          <div className="answer-footer">
            <div className="image-container">{renderImages()}</div>
            <span>
              {isSeller(props.answer.answerer_name)
              ? <b>{props.answer.answerer_name}</b>
              : <p>{props.answer.answerer_name}</p>}
            </span>
            <span>  {moment(props.answer.date).format('MMMM D, YYYY')} |  </span>
            <span onClick={handleHelpfulClick}>Helpful? <u>Yes</u> ({props.answer.helpfulness})  |  </span>
            <span><u onClick={handleReport}>Report</u></span>
          </div>
          </div>
      </div>
    </li>
  );
};

export default Answers;
