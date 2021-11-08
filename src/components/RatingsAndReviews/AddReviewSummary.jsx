import React from 'react';
import styled from 'styled-components';

// const StyledSummary = styled.input.attrs({
//   type: 'text',
// })`
//   padding: 5px
//   `

const StyledDiv = styled.div`
padding: 5px
`

const AddReviewSummary = (props) => {
  return(
    <StyledDiv>
      Summary:
      <input type = 'text'  placeholder = 'Example: Best purchase ever!'/>
    </StyledDiv>
  )
}

export default AddReviewSummary;