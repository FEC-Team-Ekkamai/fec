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

const Container = styled.div`
  margin-left: 2rem;
`;

const Logo = styled.h3`
  color: #D0D0D0;
`

const Nav = (props) => (
  <NavBar className="product-search">
    <Container className="logo">
      <Logo className="logo-text">Ekkamai</Logo>
    </Container>
    <SearchBar
      onSubmit={props.onSubmit}
      onChange={props.onChange}
    />
  </NavBar>
)
export default Nav;