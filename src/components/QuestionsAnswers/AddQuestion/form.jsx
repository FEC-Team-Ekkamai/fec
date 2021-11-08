import React from 'react';
import styled, { css } from 'styled-components';

const QuestionBody = styled.textarea`
  width: 350px;
  height: 100px;
  resize: none;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e, this.state)}>
        <label htmlFor="name">Name: </label>
        <input name="name" type="text" onChange={this.handleChange} /><br />
        <label htmlFor="email">e-mail: </label>
        <input name="email" type="text" onChange={this.handleChange} /><br />
        <label htmlFor="question-input">What is your question? </label>
        <QuestionBody name="body" onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;