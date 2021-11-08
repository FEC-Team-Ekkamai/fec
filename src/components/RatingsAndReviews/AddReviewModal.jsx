import React from 'react';
import styled from 'styled-components';
import AddReviewForm from './AddReviewForm.jsx';

const StyledWrapper = styled.div`

  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  margin: 300px auto 0;
  transition: all .8s;
  width: 60%;
  border-radius: 10px;
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  `

const StyledHeader = styled.div`
  background: #e2e2e2;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;
`

const StyledHeaderTwo = styled.h2`
float: left;
margin: 0;
padding: 0;
`

const StyledBody = styled.div`
  padding: 10px 15px;
  text-align: center;
  height: 500px;
`

const StyledFooter = styled.div`
  background: #e2e2e2;
  height: 35px;
  padding: 15px;
`

const StyledButton = styled.span`
  color: white;
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;
  &:hover {
    color: black;
  }
`

const AddReviewModal = (props) => {
  return (
    <div>
      <StyledWrapper>
          <StyledHeader>
            <StyledHeaderTwo>Write a Review</StyledHeaderTwo>
            <StyledButton onClick = {props.modalHandler}>x</StyledButton>
          </StyledHeader>
          <StyledBody>
            <AddReviewForm characteristics = {props.characteristics}/>
          </StyledBody>
          <StyledFooter>
            <p>gonna put a submit button here</p>
          </StyledFooter>
        </StyledWrapper>
    </div>
  )
}

export default AddReviewModal;