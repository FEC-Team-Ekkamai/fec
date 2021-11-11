import React from 'react';
import Modal from './../modal.jsx'
import Form from './questionForm.jsx';

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
      <div>
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
          className="add-question"
          onClick={this.handleClick}
        >
          Add a Question
        </button>
      </div>
    )
  }
}

export default AddQuestion;