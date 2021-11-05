import React from 'react';
import styled, { css } from 'styled-components';

const QuestionBody = styled.textarea`
  width: 350px;
  height: 100px;
  resize: none;
`;

const Form = (props) => (
  <form onSubmit={props.onSubmit}>
    <label htmlFor="name">Name: </label>
    <input type="text" /><br />
    <label htmlFor="email">e-mail: </label>
    <input type="text" /><br />
    <label htmlFor="question-input">What is your question? </label>
    <QuestionBody></QuestionBody>
  </form>
);

export default Form;