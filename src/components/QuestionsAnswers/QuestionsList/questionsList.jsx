import React from 'react';
import Questions from './questions.jsx';

const QuestionsList = (props) => (
  <div className="questions-view">
    <div className="questions-list">
      <ul>
        {props.questions.map(question => (
          <Questions question={question} key={question.question_id} />
        ))}
      </ul>
    </div>
  </div>
);

export default QuestionsList;
