import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

const Email = (props) => {
  return (
    <StyledDiv>
      Email:
      <input
        type="email"
        placeholder="jackson11@email.com"
        maxLength="60"
        name="email"
        required
      />
      <br />
      For authentication reasons, you will not be emailed
    </StyledDiv>
  );
};

export default Email;
