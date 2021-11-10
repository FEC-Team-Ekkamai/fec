import React from 'react';
import Questions from './questions.jsx';
import styled, { css } from 'styled-components';

const List = styled.div`
  height: 300px;
  overflow-y: auto;
`;

const QuestionsList = (props) => {
  return (
    <List className="questions-list">
      <ul>
        {props.questions.slice(0, props.numQuestionsDisplayed).map(question => (
          <Questions
            question={question}
            numAnswersDisplayed={props.numAnswersDisplayed}
            viewMoreAnswers={props.viewMoreAnswers}
            key={question.question_id}
          />
        ))}
      </ul>
    </List>
  );
}

export default QuestionsList;
