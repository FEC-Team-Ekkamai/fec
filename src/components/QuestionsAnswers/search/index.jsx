import React from 'react';

const Search = (props) => (
  <div className="questions-search" >
    <input
      type="search"
      placeholder="Have a question? Search for the answers..."
      onChange={props.onChange}
    />
  </div>
);

export default Search;