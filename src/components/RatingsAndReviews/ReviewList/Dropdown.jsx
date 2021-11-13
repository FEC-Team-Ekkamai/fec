import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.div`
  position: absolute;
  left: 565px;
  top: 150%;
  left: 60%;
  overflow: visible;
  font-family: "Open Sans", sans-serif;
  color: #9eb7c0;
  border-radius: 25px;
`;

const Dropdown = (props) => {
  return (
    <StyledDropdown>
      <select name="reviews-sort" onChange={(e) => props.sortHandler(e)}>
        <option value="newest">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="relevant">Newest</option>
      </select>
    </StyledDropdown>
  );
};

export default Dropdown;
