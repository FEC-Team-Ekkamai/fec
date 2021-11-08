import React from 'react'
import styled from 'styled-components';
import ReviewTitle from './ReviewTitle.jsx';
import ReviewBody from './ReviewBody.jsx';
import ReviewDate from './ReviewDate.jsx';
import ReviewHelp from './ReviewHelp.jsx';
import ReviewRecommendation from './ReviewRecommendation.jsx'
import ReviewResponse from './ReviewResponse.jsx'

const StyledEntry = styled.div`
  width: 550px;
  border-bottom: 1px solid;
  margin: 0 auto;
  text-align: center;
  `


const ReviewListEntry = (props) => (
<StyledEntry id = {props.review.review_id}>
  <ReviewDate date = {new Date(props.review.date).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})} username = {props.review.reviewer_name} />
  <ReviewTitle title = {props.review.summary}/>
  <ReviewBody body = {props.review.body}/>
  <ReviewRecommendation recommend = {props.review.recommend} />
  <ReviewResponse response = {props.review.response} />
  <ReviewHelp id = {props.review.review_id} helpfulness = {props.review.helpfulness} handleHelpClick = {props.handleHelpClick} handleReportClick = {props.handleReportClick}/>
</StyledEntry>
)

export default ReviewListEntry;
