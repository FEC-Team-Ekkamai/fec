import React from 'react';
import styled, { css } from 'styled-components';

const SearchBar = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
`;

const Search = (props) => (
  <div className="questions-search" >
    <SearchBar
      type="search"
      placeholder="Have a question? Search for the answers..."
      onChange={props.onChange}
    ></SearchBar>
    <span className="material-icons search-icon">search</span>
  </div>
);

export default Search;