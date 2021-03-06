import React from "react";
import styled from "styled-components";

const StyledResponse = styled.div`
  font-weight: normal;
  text-align: left;
  background: ${(props) => (props.response ? "#ebebeb" : "white")};
  color: gray;
  width: 500px;
  padding: 10px;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  background-color: #9eb7c0;
`;

const Response = (props) => (
  <StyledResponse>
    {props.response ? "Response: " + props.response : null}
  </StyledResponse>
);

export default Response;

<div></div>