import React from "react";
import styled from "styled-components";

const StyledDate = styled.div`
  position: absolute;
  top: 0;
  right: 5%;
  width: 30%;
  text-align: right;
  color: gray;
  font-size: 11px;
  font-family: "Open Sans", sans-serif;
  margin-top: 18px;
`;

const Date = (props) => (
  <StyledDate>
    {props.username}, {props.date}
  </StyledDate>
);

export default Date;
