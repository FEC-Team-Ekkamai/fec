import React from 'react';
import Questions from './questions.jsx';
import styled, { css } from 'styled-components';

const List = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const QuestionsList = (props) => {
  return (
    <List className="questions-list">
      {props.questions.slice(0, props.numQuestionsDisplayed).map(question => (
        <Questions
          numAnswersDisplayed={props.numAnswersDisplayed}
          getQuestions={props.getQuestions}
          viewMoreAnswers={props.viewMoreAnswers}
          key={question.question_id}
          question={question}
        />
      ))}
    </List>
  );
}

export default QuestionsList;
