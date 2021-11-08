import React from 'react';
import Questions from './questions.jsx';
import styled, { css } from 'styled-components';

const QuestionsList = (props) => {

  const List = styled.div`
    height: 300px;
    overflow-y: auto;
  `;

  return (
    <div className="questions-view">
      <List className="questions-list">
        <ul>
          {props.questions.map((question, index) => (
            index < props.numQuestionsDisplayed
              ? <Questions
                  question={question}
                  numAnswersDisplayed={props.numAnswersDisplayed}
                  viewMoreAnswers={props.viewMoreAnswers}
                  key={question.question_id}
                />
              : null
          ))}
        </ul>
      </List>
    </div>
  );
}

export default QuestionsList;
