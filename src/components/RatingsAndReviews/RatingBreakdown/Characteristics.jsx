import React from "react";
import CharacteristicsBar from "./CharacteristicsBar.jsx";
import styled from "styled-components";

const StyledCharacteristics = styled.div`
  position: absolute;
  top: 50%;
  height: 50%;
  width: 230px;
`;

const Characteristics = (props) => {
  var characteristicsObject = {
    Size: [
      "A size too small",
      "1/2 a size too small",
      "Perfect",
      "1/2 a size too big",
      "A size too big",
    ],
    Width: [
      "Too narrow",
      "Slightly narrow",
      "Perfect",
      "Slightly wide",
      "Too wide",
    ],
    Comfort: [
      "Uncomfortable",
      "Slightly uncomfortable",
      "Ok",
      "Comfortable",
      "Perfect",
    ],
    Quality: [
      "Poor",
      "Below average",
      "What I expected",
      "Pretty great",
      "Perfect",
    ],
    Fit: [
      "Runs tight",
      "Runs slightly tight",
      "Perfect",
      "Runs slightly long",
      "Runs long",
    ],
    Length: [
      "Runs short",
      "Runs slightly short",
      "Perfect",
      "Runs slightly long",
      "Runs long",
    ],
  };

  var characteristicsArray = Object.entries(
    props.characteristics.characteristics
  );

  return (
    <StyledCharacteristics>
      {characteristicsArray.map((characteristic, index) => {
        var percentageValue = ((characteristic[1].value / 5) * 100).toFixed(0);
        return (
          <CharacteristicsBar
            percentageValue={percentageValue}
            index={index}
            characteristic={characteristic}
            characteristicsObject={characteristicsObject}
          />
        );
      })}
    </StyledCharacteristics>
  );
};

export default Characteristics;
