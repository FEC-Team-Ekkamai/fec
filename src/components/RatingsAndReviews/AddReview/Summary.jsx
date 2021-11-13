import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

const Summary = (props) => {
  return (
    <StyledDiv>
      Summary
      <br />
      <input
        name="summary"
        type="text"
        placeholder="Example: Best purchase ever!"
        maxLength="60"
      />
    </StyledDiv>
  );
};

export default Summary;
