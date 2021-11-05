import React from 'react'
import styled from 'styled-components';


const StyledTitle = styled.div`
  font-weight: bold;
  text-align: left;
  padding: 5px;
  font-size: 18px;
  `


const ReviewTitle = (props) => (
<StyledTitle>
  {props.title}
</StyledTitle>
)

export default ReviewTitle;