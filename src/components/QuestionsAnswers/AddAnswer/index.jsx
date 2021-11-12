import React from 'react';
import Modal from './../modal.jsx';
import Form from './answerForm.jsx';
import styled, { css } from 'styled-components';

const StyledBackShed = styled.div`
  transition: all .5s;
  opacity: 0.9;
  background-color: grey;
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  z-index:1;
`
class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  handleClick() {
    console.log('clicked')
    this.setState({ showModal: true });
  }

  onClose() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="add-answer">

        {this.state.showModal ? <StyledBackShed></StyledBackShed> : null}

        <Modal
          headerText={'Answer'}
          view={this.state.showModal}
          onClose={this.onClose}
        >
          <Form
            questionId={this.props.questionId}
            getQuestions={this.props.getQuestions}
          />
        </Modal>
        <div
          className="reaction-button middle-reaction-container"
          onClick={this.handleClick}>
            Add Answer
        </div>
      </div>
    )
  }
}

export default AddAnswer;