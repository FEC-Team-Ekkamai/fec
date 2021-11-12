import React from 'react';
import SearchBar from './search.jsx';
import styled, { css } from 'styled-components';

const NavBar = styled.div`
  background: rgba(0,0,0, .3);
  position: fixed;
  width: 100%;
  height:75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 5;
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