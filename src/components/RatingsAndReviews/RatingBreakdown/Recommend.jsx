import React from "react";
import styled from "styled-components";

const StyledRec = styled.div`
  width: 100%;
  font-size: 12px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

const Recommend = (props) => {
  var total =
    Number(props.meta.recommended.false || 0) +
    Number(props.meta.recommended.true);

  if (props.meta.recommended.true !== undefined) {
    var percentRecommended = (props.meta.recommended.true / total) * 100;
    percentRecommended = Math.floor(percentRecommended);
    return (
      <StyledRec>
        {percentRecommended}% of people recommend this product.
      </StyledRec>
    );
  }
};

export default Recommend;
