import React from 'react';
import axios from 'axios';
import Search from './search/index.jsx';
import QuestionsList from './QuestionsList/questionsList.jsx';
import AddQuestion from './AddQuestion/index.jsx';

class QuestionsView extends React.Component {


  constructor(props) {
    const DEFAULT_QA_ELEMENTS_SHOWN = 2;
    super(props);
    this.state = {
      questions: [],
      displayedQuestions: [],
      numQuestionsDisplayed: DEFAULT_QA_ELEMENTS_SHOWN,
    };
    this.filterQuestions = this.filterQuestions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleViewMore = this.handleViewMore.bind(this);
    this.displayMoreQuestionsButton = this.displayMoreQuestionsButton.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/products/questions/?product_id=${this.props.productId}`)
    .then(questions => {
      this.setState({ questions: questions.data.results });
      this.filterQuestions('');
    })
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

  displayMoreQuestionsButton() {
    const numQuestions = this.state.questions.length;
    if (this.state.numQuestionsDisplayed < numQuestions && numQuestions !== 0) {
      return (
        <button
          className="view-more-questions"
          onClick={this.handleViewMore}
        >
          More Answered Questions
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <div className="qa-container">
          <h3>Questions &amp; Answers</h3>
          <Search onChange={this.handleChange} />
          <QuestionsList
            viewMoreAnswers={this.handleViewMoreAnswers}
            numQuestionsDisplayed={this.state.numQuestionsDisplayed}
            numAnswersDisplayed={this.state.numAnswersDisplayed}
            questions={this.state.displayedQuestions}
          />
        </div>
        <div className="questions-footer">
          <AddQuestion productId={this.props.productId} />
          {this.displayMoreQuestionsButton()}
        </div>
      </>
    );
  }
}

export default QuestionsView;