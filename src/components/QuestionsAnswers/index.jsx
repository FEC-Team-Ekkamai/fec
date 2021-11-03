import React from 'react';
import axios from 'axios';
import Search from './search/index.jsx';
import QuestionsList from './QuestionsList/questionsList.jsx';

class QuestionsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      displayedQuestions: [],
      answers: []
    }
    this.filterQuestions = this.filterQuestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/products/questions/?product_id=${this.props.productId}`)
    .then(questions => {
      this.setState({ questions: questions.data.results });
      this.filterQuestions('');
    })
    .catch(console.error)
  }

  handleChange(event) {
    this.filterQuestions(event.target.value);
  }

  filterQuestions(query) {
    this.setState({
      displayedQuestions: this.state.questions.filter(question => {
        return question.question_body.toLowerCase().includes(query.toLowerCase());
      })
    })
  }

  render() {
    return (
      <>
        <div className="qa-container">
          <h3>Questions &amp; Answers</h3>
          <Search onChange={this.handleChange} />
          <QuestionsList questions={this.state.displayedQuestions}/>
        </div>
        <div className="questions-footer">
          <button className="add-question">Add a Question</button>
          <button className="view-more-questions">More Answered Questions</button>
        </div>
      </>
    );
  }
}

export default QuestionsView;