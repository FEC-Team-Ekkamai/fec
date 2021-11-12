import React from 'react';
import SearchBar from './search.jsx';
import styled, { css } from 'styled-components';

const NavBar = styled.div`
  background: #9EB7C1;
  position: absolute;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left 0;
`;

const Nav = (props) => (
  <NavBar className="product-search">
    <div className="logo">LOGO</div>
    <SearchBar
      onSubmit={props.onSubmit}
      onChange={props.onChange}
    />
  </NavBar>
)
export default Nav;