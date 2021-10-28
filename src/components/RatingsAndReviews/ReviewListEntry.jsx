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


const ReviewListEntry = () => (
<StyledEntry>
  <ReviewDate />
  <ReviewTitle />
  <ReviewBody />
  <ReviewHelp />
</StyledEntry>
)

export default ReviewListEntry;