import React from "react";
import styled from "styled-components";

const StyledBarArea = styled.div`
position: absolute;
  width: 100%
  height: 50%
  border: 1px solid black;
  padding: 5px 0px 5px 0px;
  font-family: "Open Sans", sans-serif;

`;

const StyledBar = styled.svg`
  height: 10px;
  width: 85%;
  padding: 2px 0px 0px 2px;
  display: flex;
  justify-content: center;
`;

const RatingsChart = (props) => {
  console.log(props.meta.ratings);
  var numberOfRatingsArray = Object.values(props.meta.ratings);
  console.log(numberOfRatingsArray);
  var total = 0;
  numberOfRatingsArray.map((number) => {
    total += Number(number);
  });

  if (props.meta.ratings[Number("5")] !== undefined) {
    var fiveStarPercentageInt =
      (Number(props.meta.ratings[Number("5")]) / total) * 100;

    var fiveStarPercentageString = fiveStarPercentageInt.toString() + "%";
  } else {
    var fiveStarPercentageString = "0%";
  }
  if (props.meta.ratings[Number("4")] !== undefined) {
    var fourStarPercentageInt =
      (Number(props.meta.ratings[Number("4")]) / total) * 100;

    var fourStarPercentageString = fourStarPercentageInt.toString() + "%";
  } else {
    var fourStarPercentageString = "0%";
  }

  if (props.meta.ratings[Number("3")] !== undefined) {
    var threeStarPercentageInt =
      (Number(props.meta.ratings[Number("3")]) / total) * 100;

    var threeStarPercentageString = threeStarPercentageInt.toString() + "%";
  } else {
    var threeStarPercentageString = "0%";
  }

  if (props.meta.ratings[Number("2")] !== undefined) {
    var twoStarPercentageInt =
      (Number(props.meta.ratings[Number("2")]) / total) * 100;

    var twoStarPercentageString = twoStarPercentageInt.toString() + "%";
  } else {
    var twoStarPercentageString = "0%";
  }

  if (props.meta.ratings[Number("1")] !== undefined) {
    var oneStarPercentageInt =
      (Number(props.meta.ratings[Number("1")]) / total) * 100;

    var oneStarPercentageString = oneStarPercentageInt.toString() + "%";
  } else {
    var oneStarPercentageString = "0%";
  }

  return (
    <StyledBarArea>
      <div text-align="center">5 stars</div>
      <StyledBar width="100%" height="65px">
        <g>
          <rect fill="#D0D0D0" width="100%" height="5"></rect>
          <rect
            fill="000000"
            width={fiveStarPercentageString}
            height="5"
          ></rect>
        </g>
      </StyledBar>
      4 stars
      <StyledBar width="100%" height="65px">
        <g>
          <rect fill="#D0D0D0" width="100%" height="5"></rect>
          <rect
            fill="000000"
            width={fourStarPercentageString}
            height="5"
          ></rect>
        </g>
      </StyledBar>
      3 stars
      <StyledBar width="100%" height="65px">
        <g>
          <rect fill="#D0D0D0" width="100%" height="5"></rect>
          <rect
            fill="000000"
            width={threeStarPercentageString}
            height="5"
          ></rect>
        </g>
      </StyledBar>
      2 stars
      <StyledBar width="100%" height="65px">
        <g>
          <rect fill="#D0D0D0" width="100%" height="5"></rect>
          <rect fill="000000" width={twoStarPercentageString} height="5"></rect>
        </g>
      </StyledBar>
      1 star
      <StyledBar width="100%" height="65px">
        <g>
          <rect fill="#D0D0D0" width="100%" height="5"></rect>
          <rect fill="000000" width={oneStarPercentageString} height="5"></rect>
        </g>
      </StyledBar>
    </StyledBarArea>
  );
};

export default RatingsChart;
