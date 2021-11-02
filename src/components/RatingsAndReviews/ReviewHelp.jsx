
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
  Helpful? Yes ( {props.helpfulness} ) | Report
</StyledHelp>
)


export default ReviewHelp;

