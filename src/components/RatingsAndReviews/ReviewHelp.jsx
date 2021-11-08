
import React from 'react'
import styled from 'styled-components';


const StyledHelp = styled.div`
  font-weight: normal;
  text-align: left;
  color: gray;
  width: 200px;
  padding: 10px;
  font-size: 14px;

  `


const ReviewHelp = (props) => (
<StyledHelp>
  Helpful? <span onClick = {(e) => props.handleHelpClick(e)}><u id = {props.id}>Yes ( {props.helpfulness} )</u></span>| <span onClick = {(e) => {props.handleReportClick(e)}}><u id = {props.id}>Report</u></span>
</StyledHelp>
)


export default ReviewHelp;

