import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  width: 100%;
  height: 10%;
  position: relative;
`;

const StyledRating = styled.div`
  font-size: 30px;
  text-align: center;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;

const StyledStarDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Stars = (props) => {
  var ratings = props.stars.ratings;
  var numberOfRatings = 0;
  var ratingTotal = 0;

  for (var keys in ratings) {
    numberOfRatings += Number(ratings[keys]);
    ratingTotal += keys * Number(ratings[keys]);
  }

  var average = ratingTotal / numberOfRatings;

  average = (Math.round(average * 4) / 4).toFixed(2);

  var totalAverage = average;

  var ratingsArray = [];

  for (var i = 0; i < 5; i++) {
    ratingsArray.push(Number(average));
    console.log(ratingsArray);
    average = average - 1;
  }

  for (var j = 0; j < ratingsArray.length; j++) {
    if (ratingsArray[j] > 1) {
      ratingsArray[j] = 1;
    } else if (ratingsArray[j] < 0) {
      ratingsArray[j] = 0;
    }
  }

  return (
    <StyledDiv>
      <StyledRating>{totalAverage}</StyledRating>
      <StyledStarDiv>
        {ratingsArray.map((star, k) => {
          var fill = (star * 100).toString() + "%";
          var unfill = (star * 100 + 1).toString() + "%";

          return (
            <svg
              id="svgelem"
              width="30"
              height="30"
              fill={`url(#half_grad${k})`}
            >
              <polygon points="12.5,1.25 5,22.5 23.75,7.5 1.25,7.5 20,22.5" />
              <defs>
                <linearGradient id={`half_grad${k}`}>
                  <stop offset={`${fill}`} stopColor="#FBC108" />
                  <stop offset={`${unfill}`} stopColor="#d0d0d0" />
                </linearGradient>
              </defs>
            </svg>
          );
        })}
      </StyledStarDiv>
    </StyledDiv>
  );
};

export default Stars;
