import React from "react";
import ReviewList from "./ReviewList/ReviewList.jsx";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 1000px;
  background-color: #89aab8;
  border: 1px solid blue;
  display: grid;
`;

const RatingsAndReviews = (props) => {
  return (
    <StyledContainer>
      <ReviewList firstProduct={props.firstProduct} />
    </StyledContainer>
  );
};

export default RatingsAndReviews;
