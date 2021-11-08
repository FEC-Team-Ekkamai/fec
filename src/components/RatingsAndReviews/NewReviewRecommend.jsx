import React from 'react';
import styled from 'styled-components';


// const StyledBody = styled.div`
//   font-weight: normal;
//   text-align: left;
//   padding: 5px;
//   `


const NewReviewRecommend = (props) => (
<div>
  <form>
    Do you recommend this product?
    <input name = 'recommend' type = 'radio' value = 'yes'/>Yes
    <input name = 'recommend' type = 'radio' value = 'no'/>No
  </form>
</div>
)

export default NewReviewRecommend;