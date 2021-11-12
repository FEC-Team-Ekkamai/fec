import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

const Submit = (props) => {
  return (
    <StyledDiv>
      <input type="submit" />
    </StyledDiv>
  );
};

export default Submit;
