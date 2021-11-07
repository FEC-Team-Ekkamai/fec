import React from 'react';
import Questions from './questions.jsx';

const QuestionsList = (props) => (
  <div className="questions-view">
     <div className="questions-list">
      <ul>
        {props.questions.map((question, index) => (
          index < props.numQuestionsDisplayed
            ? <Questions
                question={question}
                key={question.question_id}
              />
            : null
        ))}
      </ul>
    </div>
  </div>
);

export default QuestionsList;
