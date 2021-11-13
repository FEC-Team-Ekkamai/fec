import React from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Form from './../form.jsx';

const QuestionBody = styled.textarea`
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
      .then(() => { this.props.getQuestions(); console.log('worked!')})
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
              required
            />
          </div>
          <div>
            <label htmlFor="email">e-mail: </label>
            <input
              className="text-input"
              name="email"
              type="text"
              onChange={this.handleChange}
              required
            />
          </div>
        </Container>
        <Container><label htmlFor="question-input">What is your question? </label></Container>
        <QuestionBody
          name="body"
          className="text-body-input"
          onChange={this.handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default QuestionForm;