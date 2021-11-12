import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

const Body = (props) => {
  return (
    <StyledDiv>
      Body
      <br />
      <textarea
        rows="5"
        cols="30"
        name="body"
        placeholder="Why did you like the product or not?"
        maxLength="1000"
        minLength="50"
        required
      />
    </StyledDiv>
  );
};

export default Body;
