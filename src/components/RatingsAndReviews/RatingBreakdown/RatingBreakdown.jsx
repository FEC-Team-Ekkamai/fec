import React from "react";
import styled from "styled-components";
import Recommend from "./Recommend.jsx";
import RatingsChart from "./RatingsChart.jsx";
import Stars from "./Stars.jsx";
import Characteristics from "./Characteristics.jsx";

const StyledCont = styled.div`
  position: relative;
  width: 25%;
  height: 600px;
  float: left;
  background-color: #9eb7c0;
  padding-left: 2%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
`;

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledCont>
        <Stars stars={this.props.meta} />
        <Recommend meta={this.props.meta} />
        <RatingsChart meta={this.props.meta} />
        <Characteristics characteristics={this.props.meta} />
      </StyledCont>
    );
  }
}

export default RatingBreakdown;
