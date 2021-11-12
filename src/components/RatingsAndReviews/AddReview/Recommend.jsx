import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

const Recommend = (props) => (
  <StyledDiv>
    Do you recommend this product?
    <br />
    <label>
      Yes
      <input type="radio" value="true" name="yesno" required />
    </label>
    <label>
      No
      <input type="radio" value="false" name="yesno" />
    </label>
  </StyledDiv>
);

export default Recommend;
