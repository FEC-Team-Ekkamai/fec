import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

const Images = (props) => {
  return (
    <StyledDiv>
      <label>
        Upload photos:
        <input type="file" accept="image/png, image/jpeg" name="images" />
      </label>
    </StyledDiv>
  );
};

export default Images;
