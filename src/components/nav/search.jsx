import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  margin-right: 1rem;
`;

const SearchBar = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: solid 1px white;
  font-size: 18px;
  padding: 1rem;
`;

const Button = styled.button`
  border: none;
  background: transparent;
`;

const Search = (props) => (
  <Container>
    <form onSubmit={props.onSubmit}>
      <SearchBar
        type="search"
        onChange={props.onChange}
      ></SearchBar>
      <Button className="nav-search-button"><span className="material-icons search-icon">search</span></Button>
    </form>
  </Container>
)

export default Search;