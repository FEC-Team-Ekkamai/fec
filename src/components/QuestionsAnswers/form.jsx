import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = (props) => (
  <form onSubmit={props.onSubmit}>
    <Container>
      {props.children}
    </Container>
  </form>
);

export default Form;