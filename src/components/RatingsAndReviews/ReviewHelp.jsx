
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


const ReviewHelp = () => (
<StyledHelp>
  Helpful? Yes(9) | Report
</StyledHelp>
)

export default ReviewHelp;