import React from 'react';
import Modal from './modal.jsx';


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
          onSubmit={this.props.handleSubmit}
          view={this.state.showModal}
          onClose={this.onClose}
        />
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