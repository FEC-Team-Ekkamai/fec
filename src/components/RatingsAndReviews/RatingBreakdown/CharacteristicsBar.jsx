import React from "react";
import styled from "styled-components";

const StyledCharacteristicsBar = styled.div`
  height: 10px;
  width: 200px;
  padding-left: 8%;
  padding-top: 15%;
  padding-right: 8%;
  position: relative;
  z-index: 1;
`;

const StyledCharacteristicsTextOne = styled.div`
  height: 10px;
  width: 33%;
  font-size: 10px;
  text-align: center;
  transform: translate(-16px, 3px);
  position: relative;
  font-family: "Open Sans", sans-serif;

  z-index: 1;
`;

const StyledCharacteristicsTextTwo = styled.div`
  height: 10px;
  width: 33%;
  font-size: 10px;
  text-align: center;
  transform: translate(51px, -8px);
  position: relative;
  font-family: "Open Sans", sans-serif;

  z-index: 1;
`;

const StyledCharacteristicsText = styled.div`
  height: 10px;
  width: 33%;
  font-size: 10px;
  text-align: center;
  transform: translate(137px, -18px);
  position: relative;
  font-family: "Open Sans", sans-serif;

  z-index: 1;
`;

const CharacteristicsBar = (props) => {
  return (
    <StyledCharacteristicsBar key={`${props.index}`}>
      <StyledCharacteristicsBar>
        <span>
          <svg width="50" height="10">
            <rect width="50" height="10" fill="#D0D0D0" />
          </svg>
        </span>
        <span p>
          <svg width="50" height="10">
            <rect width="50" height="10" fill="#D0D0D0" />
          </svg>
        </span>
        <span>
          <svg width="50" height="10">
            <rect width="50" height="10" fill="#D0D0D0" />
          </svg>
        </span>

        <svg overflow="visible">
          <path
            d="M28.678,5.798L14.713,23.499c-0.16,0.201-0.495,0.201-0.658,0L0.088,5.798C-0.009,5.669-0.027,5.501,0.04,5.353
			C0.111,5.209,0.26,5.12,0.414,5.12H28.35c0.16,0,0.31,0.089,0.378,0.233C28.798,5.501,28.776,5.669,28.678,5.798z"
            height="7px"
            width="7px"
            style={{
              transform: `translate(${
                -15 + Number(props.percentageValue) * 2
              }px, -40px)`,
            }}
            position="absolute"
            z-index="2"
          />
        </svg>
      </StyledCharacteristicsBar>
      <div>
        <StyledCharacteristicsTextOne>
          {props.characteristicsObject[props.characteristic[0]][0]}
        </StyledCharacteristicsTextOne>
        <StyledCharacteristicsTextTwo>
          {props.characteristicsObject[props.characteristic[0]][2]}
        </StyledCharacteristicsTextTwo>
        <StyledCharacteristicsText>
          {props.characteristicsObject[props.characteristic[0]][4]}
        </StyledCharacteristicsText>
      </div>
    </StyledCharacteristicsBar>
  );
};

export default CharacteristicsBar;

/*
<img
          src={triangle}
          height="25px"
          width="25px"
          style={{
            transform: `translateX(-${
              369.99 * (props.percentageValue / 100)
            }px)`,
          }}
        />
        */
