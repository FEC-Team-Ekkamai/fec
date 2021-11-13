import React from 'react';
import Form from './../form.jsx';
import axios from 'axios';
import styled, { css } from 'styled-components';

const AnswerBody = styled.textarea`
  width: 75%;
  height: 5rem;
  resize: none;
  top: 0;
  left: 0;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

const Button = styled.button`
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 5rem;
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
        <Container>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            className="text-input"
            name="name"
            type="text"
            onChange={this.handleChange}
            />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input
            className="text-input"
            name="email"
            type="text"
            onChange={this.handleChange}
            required
            />
        </div>
        <label htmlFor="photos">Add Photos: </label>
        <div>
          <input
            name="photos"
            type="file"
            accept="image/*"
            onChange={this.handleChange}
            required
          />
        </div>
        </Container>
        <Container><label htmlFor="body">Response: </label></Container>
        <AnswerBody
          name="body"
          className="text-body-input"
          onChange={this.handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default AddAnswer;