import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Form from './../form.jsx';

const QuestionBody = styled.textarea`
  width: 350px;
  height: 100px;
  resize: none;
`;

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: props.productId,
      name: '',
      email: '',
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/products/questions', this.state)
      .then(console.log)
      .catch(console.error)
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input name="name" type="text" onChange={this.handleChange} /><br />
        <label htmlFor="email">e-mail: </label>
        <input name="email" type="text" onChange={this.handleChange} /><br />
        <label htmlFor="question-input">What is your question? </label>
        <QuestionBody name="body" onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

export default QuestionForm;