import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className="questions-search" >
        <input
          type="search"
          placeholder="Have a question? Search for the answers..."
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </div>
    );
  }
}

export default Search;