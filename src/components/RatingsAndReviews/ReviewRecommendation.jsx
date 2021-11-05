import React from 'react'
import styled from 'styled-components';


const StyledRecommendation = styled.div`
font-weight: normal;
text-align: left;
color: gray;
width: 200px;
padding: 10px;
font-size: 14px;

`


const Recommendation = (props) => (
<StyledRecommendation>
  {props.recommend ? ' ✔ I recommend this product' : null}
</StyledRecommendation>
)

export default Recommendation;