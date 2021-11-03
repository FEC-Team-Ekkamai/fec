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
    console.log('Modal Button Clicked');
    this.displayModal();
  }

  onClose() {
    console.log('clicked!!!');
    this.setState({ showModal: false });
  }

  displayModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Modal onClose={this.onClose} view={this.state.showModal}/>
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