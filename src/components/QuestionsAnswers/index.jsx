import React from 'react';
import axios from 'axios';
import Search from './search/index.jsx';
import QuestionsList from './QuestionsList/questionsList.jsx';
import AddQuestion from './AddQuestion/index.jsx';

class QuestionsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      displayedQuestions: [],
      numQuestionsDisplayed: 2,
    };
    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
    this.filterQuestions = this.filterQuestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleViewMore = this.handleViewMore.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/products/questions/?product_id=${this.props.productId}`)
    .then(questions => {
      this.setState({ questions: questions.data.results });
      this.filterQuestions('');
    })
    .catch(console.error)
  }

  // change name
  handleQuestionSubmit(event, body) {
    event.preventDefault();
    body.product_id = this.props.productId;
    axios.post('/api/products/questions', body)
      .then(console.log)  // maybe perform redirection here or create 'success' modal
      .catch(console.error)
  }

  handleViewMore(event) {
    event.preventDefault();
    let numDisplayed = this.state.numQuestionsDisplayed;
    if (numDisplayed < this.state.questions.length) {
      this.setState({
        numQuestionsDisplayed: numDisplayed + 2
      });
    }
  }

  handleChange(event) {
    this.filterQuestions(event.target.value);
  }

  filterQuestions(query) {
    this.setState({
      displayedQuestions: this.state.questions.filter(question => {
        return question.question_body.toLowerCase().includes(query.toLowerCase());
      })
    });
  }

  render() {
    return (
      <>
        <div className="qa-container">
          <h3>Questions &amp; Answers</h3>
          <Search onChange={this.handleChange} />
          <QuestionsList
            numQuestionsDisplayed={this.state.numQuestionsDisplayed}
            questions={this.state.displayedQuestions}
          />
        </div>
        <div className="questions-footer">
          <AddQuestion handleSubmit={this.handleQuestionSubmit}/>
          <button
            className="view-more-questions"
            onClick={this.handleViewMore}
          >
              More Answered Questions
          </button>
        </div>
      </>
    );
  }
}

export default QuestionsView;