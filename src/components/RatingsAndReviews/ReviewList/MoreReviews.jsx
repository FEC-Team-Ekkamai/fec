import React from "react";
import styled from "styled-components";

const StyledOpenButton = styled.button`
  overflow: visible;
  height: 33px;
  font-family: "Open Sans", sans-serif;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  background-color: #9eb7c0;
  border-radius: 25px;
`;

const MoreReviews = (props) => (
  <StyledOpenButton onClick={props.moreReviewHandler}>
    More Reviews
  </StyledOpenButton>
);

export default MoreReviews;
