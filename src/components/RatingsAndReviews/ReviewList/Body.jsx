import React from "react";
import styled from "styled-components";

const StyledBody = styled.div`
  position: absolute;
  width: 90%;
  word-wrap: break-word;
  padding-left: 5%;
  font-weight: normal;
  text-align: left;
  top: 33%;
  font-family: "Open Sans", sans-serif;
`;

const Body = (props) => <StyledBody>{props.body}</StyledBody>;

export default Body;
