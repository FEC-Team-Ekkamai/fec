import React from 'react';
import axios from 'axios';
import Search from './search/index.jsx';
import QuestionsList from './QuestionsList/questionsList.jsx';

class QuestionsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: []
    }
  }

  componentDidMount() {
    axios.get(`/api/products/questions/?product_id=${this.props.productId}`)
      .then(questions => {
        this.setState({ questions: questions.data.results })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="qa-container">
        <h3>Questions!</h3>
        <Search />
        <QuestionsList questions={this.state.questions} />
      </div>
    );
  }
}

export default QuestionsView;