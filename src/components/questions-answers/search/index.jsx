import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <div className="questions-search" >
        <input
          type="search"
          placeholder="Have a question? Search for the answers..."/>
        <button>Submit</button>
      </div>
    )
  }
}

export default Search;