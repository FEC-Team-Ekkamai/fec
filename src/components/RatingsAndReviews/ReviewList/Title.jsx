import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  margin: 0 auto;
  font-weight: bold;
  word-wrap: break-word;
  text-align: center;
  font-size: 18px;
  width: 250px;
  font-family: "Open Sans", sans-serif;
`;

const ReviewTitle = (props) => <StyledTitle>{props.title}</StyledTitle>;

export default ReviewTitle;
