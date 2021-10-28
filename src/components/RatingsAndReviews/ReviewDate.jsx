import React from 'react'
import styled from 'styled-components';


const StyledDate = styled.div`
  font-weight: normal;
  text-align: right;
  color: gray;
  padding: 5px;
  font-size: 14px;

  `


const ReviewDate = (props) => (
<StyledDate>
  {props.date}
</StyledDate>
)

export default ReviewDate;
