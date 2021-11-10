import React from 'react';
import styled, { css } from 'styled-components';

const Form = (props) => (
  <form onSubmit={props.onSubmit}>
    {props.children}
  </form>
);

export default Form;