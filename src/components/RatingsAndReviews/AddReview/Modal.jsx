import React from "react";
import styled from "styled-components";
import Form from "./Form.jsx";
import Submit from "./Submit.jsx";

const StyledWrapper = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 300px auto 0;
  transition: all 0.8s;
  width: 60%;
  left: -433%;
  border-radius: 10px;
  position: absolute;
  z-index: 3;
  transform: translate(-175%, -100%);
  overflow: visible;
`;

const StyledHeader = styled.div`
  background-color: #9eb7c0;
  height: 40px;
  width: 700px;

  line-height: 40px;
  padding: 5px 20px;
  text-align: left;
  font-family: "Open Sans", sans-serif;
`;

const StyledHeaderTwo = styled.h2`
  float: left;
  margin: 0;
  padding: 0;
  width: 700px;
  font-family: "Open Sans", sans-serif;
`;

const StyledBody = styled.div`
  padding: 10px 15px;
  text-align: center;
  height: 700px;
  width: 700px;
  background-color: #89aab8;
`;

const StyledFooter = styled.div`
  background: #e2e2e2;
  height: 35px;
  padding: 15px;
  background-color: #9eb7c0;
  width: 700px;
`;

const StyledButton = styled.span`
  color: white;
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;
  &:hover {
    color: black;
  }
`;

const Modal = (props) => {
  return (
    <div>
      <StyledWrapper>
        <StyledHeader>
          <StyledHeaderTwo>Write a Review</StyledHeaderTwo>
          <StyledButton onClick={props.modalHandler}>x</StyledButton>
        </StyledHeader>
        <StyledBody>
          <Form
            formSubmitHandler={props.formSubmitHandler}
            characteristics={props.characteristics}
            formInput={props.formInput}
            setRating={props.setRating}
            rating={props.rating}
          />
        </StyledBody>
        <StyledFooter></StyledFooter>
      </StyledWrapper>
    </div>
  );
};

export default Modal;
