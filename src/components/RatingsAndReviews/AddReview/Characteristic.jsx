import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0px 10px 0px;
  font-family: "Open Sans", sans-serif;
`;

const RenderCharacteristics = (characteristic) => {
  var array = [];

  if (characteristic === "Size") {
    array = [
      "a size too small",
      "1/2 a size too small",
      "perfect",
      "1/2 a size too big",
      "a size too wide",
    ];
  } else if (characteristic === "Width") {
    array = [
      "too narrow",
      "slightly narrow",
      "perfect",
      "slightly wide",
      "too wide",
    ];
  } else if (characteristic === "Comfort") {
    array = [
      "uncomfortable",
      "slightly uncomfortable",
      "ok",
      "comfortable",
      "perfect",
    ];
  } else if (characteristic === "Quality") {
    array = [
      "poor",
      "below average",
      "what I expected",
      "pretty great",
      "perfect",
    ];
  } else if (characteristic === "Length") {
    array = [
      "runs short",
      "runs slightly short",
      "perfect",
      "runs slightly long",
      "runs long",
    ];
  } else if (characteristic === "Fit") {
    array = [
      "runs tight",
      "runs slightly tight",
      "perfect",
      "runs slightly long",
      "runs long",
    ];
  }

  return array.map((feature, i) => {
    return (
      <span>
        {feature}:
        <input type="radio" value={i + 1} name={characteristic} required />
      </span>
    );
  });
};

const Characteristics = (props) => (
  <StyledDiv>
    {props.characteristic}
    <div>{RenderCharacteristics(props.characteristic)}</div>
  </StyledDiv>
);

export default Characteristics;
