import React from 'react';
import Form from './../form.jsx';
import axios from 'axios';
import styled, { css } from 'styled-components';

const AnswerBody = styled.textarea`
  width: 350px;
  height: 100px;
  resize: none;
`;

class AddAnswer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      body: '',
      photos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleURL = this.handleURL.bind(this);
  }

  handleURL(e) {
    const url = e.target.result;
    this.setState({ photos: this.state.photos.concat([url])});
  }

  handleChange(event) {

    const name = event.target.name;
    const reader = new FileReader();

    if (name === 'photos' && event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      let reader = new FileReader();
      const img = event.target.files[0];
      reader.onloadend = this.handleURL;
      reader.readAsDataURL(img);
    } else {
      this.setState({ [name] : event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let answer = this.state;
    answer.question_id = this.props.questionId;
    axios.post('api/products/questions/answers', answer)
      .then(() => {this.props.getQuestions()})
      .catch(console.error)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
        /><br />
        <label htmlFor="email">email: </label>
        <input
          name="email"
          type="text"
          onChange={this.handleChange}
        /><br />
        <label htmlFor="photos">Add Photos: </label>
        <input
          name="photos"
          type="file"
          accept="image/*"
          onChange={this.handleChange}
        />
        <label htmlFor="body">Response: </label>
        <AnswerBody
          name="body"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </Form>
    )
  }
}

export default AddAnswer;