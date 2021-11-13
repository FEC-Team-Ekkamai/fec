import React from 'react';
import styled, { css } from 'styled-components';

const ModalContainer  = styled.div`
  background: white;
  position: fixed;
  top: 0%;
  left: 20%;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  margin: auto 0;
  margin-top: 3rem;
  width: 60%;
  z-index: 5;
`;

const Body = styled.div`
  background: #D0D0D0;
  padding: 10px 15px;
  height: 30%;
`;

const Header = styled.div`
  background: #e2e2e2;
  height: 40px;
  line-height: 40px;
  padding: 1rem 4rem;
  text-align: right;
  margin: 0;
  padding: 1rem;
`;

const Footer = styled.div`
  background: #e2e2e2;
  height: 15%;
  padding: 1.5rem;
`;

const Button = styled.button`
  background: transparent;
  margin-right: 0 auto;
  border: solid 1px black;
`;

const Modal = (props) => {
  if (!props.view) {
    return null;
  }
  return (
    <ModalContainer className="modal-container">
      <div className="container">
        <Header>Submit a {props.headerText}</Header>
        <Body className="body">{props.children}</Body>
        <Footer>
          <Button onClick={props.onClose}>Close</Button>
        </Footer>
      </div>
    </ModalContainer>
  );
};

export default Modal;