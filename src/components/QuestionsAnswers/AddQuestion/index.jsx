import React from 'react';
import Modal from './../modal.jsx'
import Form from './questionForm.jsx';
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

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  handleClick() {
    this.setState({ showModal: true });
  }

  onClose() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="add-question">

        {this.state.showModal ? <StyledBackShed></StyledBackShed> : null}

        <Modal
          headerText={'Question'}
          view={this.state.showModal}
          onClose={this.onClose}
        >
          <Form
            productId={this.props.productId}
            getQuestions={this.props.getQuestions}
          />
        </Modal>
        <button
          className="question-button"
          onClick={this.handleClick}
        >
          <p className="button-text">Add a Question</p>
          <span className="material-icons">add</span>
        </button>
      </div>
    )
  }
}

export default AddQuestion;