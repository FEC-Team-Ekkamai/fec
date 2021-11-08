import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.input.attrs({
  type: 'text',
})`
  height: 50px
  `

const StyledDiv = styled.div`
  padding: 30px
`

const AddReviewBody = (props) => {
  return (
    <StyledDiv>
      Body:
      <textarea rows = '5'
        cols = '30'
        placeholder = 'Why did you like the product or not?'
      />
    </StyledDiv>
  )
}

export default AddReviewBody;