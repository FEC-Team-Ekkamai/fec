import React from "react";
import styled from "styled-components";

const StyledHelp = styled.div`
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 30%;
  text-align: left;
  color: gray;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 15px;
`;

const Helpfulness = (props) => (
  <StyledHelp>
    Helpful?{" "}
    <span onClick={(e) => props.handleHelpClick(e)}>
      <u id={props.id}>Yes ( {props.helpfulness} )</u>
    </span>
    |
    <span
      onClick={(e) => {
        props.handleReportClick(e);
      }}
    >
      <u id={props.id}>Report</u>
    </span>
  </StyledHelp>
);

export default Helpfulness;
