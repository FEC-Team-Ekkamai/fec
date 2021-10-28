import React from 'react'
import styled from 'styled-components';
import ReviewTitle from './ReviewTitle.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewDate from './ReviewDate.jsx';
import ReviewHelp from './ReviewHelp.jsx';

const StyledEntry = styled.div`
  width: 550px;
  border-bottom: 1px solid;
  margin: 0 auto;
  text-align: center;
  `


const ReviewListEntry = (props) => (
<StyledEntry>

  <ReviewTitle title = {props.review.results[0].summary}/>
  <ReviewBody body = {props.review.results[0].body}/>
  <ReviewHelp helpfulness = {props.review.results[0].helpfulness}/>
</StyledEntry>
)

export default ReviewListEntry;
