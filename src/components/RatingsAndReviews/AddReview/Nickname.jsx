import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

const Nickname = (props) => {
  return (
    <StyledDiv>
      Nickname:
      <input
        type="text"
        placeholder="Example: jackson11!"
        maxLength="60"
        name="nickname"
        required
      />
      <br />
      For privacy reasons, do not use your full name or email address
    </StyledDiv>
  );
};

export default Nickname;
