import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  width: 30%;
`;

const StarRating = (props) => {
  return (
    <StyledDiv>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <FaStar
              color={ratingValue <= props.rating ? "#ffc107" : "#d0d0d0"}
            />
          </label>
        );
      })}
    </StyledDiv>
  );
};

export default StarRating;
