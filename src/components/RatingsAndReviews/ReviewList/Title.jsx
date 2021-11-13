import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  margin: 0 auto;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  width: 250px;
  font-family: "Open Sans", sans-serif;
`;

const ReviewTitle = (props) => <StyledTitle>{props.title.slice(0,30)}</StyledTitle>;

export default ReviewTitle;
