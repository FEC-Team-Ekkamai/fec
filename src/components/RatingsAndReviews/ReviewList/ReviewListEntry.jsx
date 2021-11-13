import React from "react";
import styled from "styled-components";
import Title from "./Title.jsx";
import Body from "./Body.jsx";
import ReviewDate from "./Date.jsx";
import Helpfulness from "./Helpfulness.jsx";
import Recommendation from "./Recommendation.jsx";
import Response from "./Response.jsx";
import StarRating from "./StarRating.jsx";

const StyledEntry = styled.div`
  position: relative;
  width: 675px;
  height: 150px;
  padding: 15px;
  margin: 15px;
  border-bottom: 1px solid black;
  border-radius: 25px;
  background-color: #9eb7c0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
`;

const ReviewListEntry = (props) => (
  <StyledEntry id={props.review.review_id}>
    <StarRating rating={props.review.rating} />
    <ReviewDate
      date={new Date(props.review.date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      username={props.review.reviewer_name}
    />
    <Title title={props.review.summary} />
    <Body body={props.review.body} />
    <Response response={props.review.response} />
    <Helpfulness
      id={props.review.review_id}
      helpfulness={props.review.helpfulness}
      handleHelpClick={props.handleHelpClick}
      handleReportClick={props.handleReportClick}
    />
    <Recommendation recommend={props.review.recommend} />
  </StyledEntry>
);

export default ReviewListEntry;
