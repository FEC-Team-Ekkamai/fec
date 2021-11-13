import React from "react";
import styled from "styled-components";

const StyledRecommendation = styled.div`
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 5%;
  color: gray;
  width: 30%;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
`;

const Recommendation = (props) => (
  <StyledRecommendation>
    {props.recommend ? " ✔ I recommend this product" : null}
  </StyledRecommendation>
);

export default Recommendation;
