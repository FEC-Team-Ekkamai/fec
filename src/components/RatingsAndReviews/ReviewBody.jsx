import React from 'react'
import styled from 'styled-components';


const StyledBody = styled.div`
  font-weight: normal;
  text-align: left;
  padding: 5px;
  `


const ReviewBody = (props) => (
<StyledBody>
  {props.body}
</StyledBody>
)

export default ReviewBody;