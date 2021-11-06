import React from 'react';
import Form from './form.jsx';
import styled, { css } from 'styled-components';

const ModalContainer  = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  margin: 100px auto 0;
  transition: all .8s;
  width: 60%;
  border-radius: 10px;
`;

const Body = styled.div`
  padding: 10px 15px;
  text-align: center;
  height:200px;
`;

const Header = styled.div`
  background: #e2e2e2;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;
  margin: 0;
  padding: 0;
`;

const Footer = styled.div`
  background: #e2e2e2;
  height: 35px;
  padding: 15px;
`;

const Button = styled.button`
  color: black;
  cursor: pointer;
  float: right;
  margin: 0;
`;

const Modal = (props) => {
  if (!props.view) {
    return null;
  }
  return (
    <ModalContainer className="modal-container">
      <div className="container">
        <Header>Submit a Question</Header>
        <Body className="body">
          <Form onSubmit={props.onSubmit}/>
        </Body>
        <Footer>
          <Button onClick={props.onClose}>Submit</Button>
        </Footer>
      </div>
    </ModalContainer  >
  )
};

export default Modal;