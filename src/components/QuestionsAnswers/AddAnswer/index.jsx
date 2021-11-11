import React from 'react';
import Modal from './../modal.jsx';
import Form from './answerForm.jsx';

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
    this.setState({ showModal: true });
  }

  onClose() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="add-answer">
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
        <span onClick={this.handleClick}><u>Add An Answer</u></span>
      </div>
    )
  }
}

export default AddAnswer;