import React from "react";
import ReviewList from "./ReviewList/ReviewList.jsx";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 650px;
  background-color: #89aab8;
  display: grid;
  margin-Bottom: 25px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const RatingsAndReviews = (props) => {
  return (
    <StyledContainer>
      <ReviewList firstProduct={props.firstProduct} />
    </StyledContainer>
  );
};

export default RatingsAndReviews;
