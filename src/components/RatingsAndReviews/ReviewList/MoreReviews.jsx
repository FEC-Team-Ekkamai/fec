import React from "react";
import styled from "styled-components";

const StyledOpenButton = styled.button`
  position: absolute;
  bottom: 0px;
  overflow: visible;
  right: 50%;
  width: 100px;
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
