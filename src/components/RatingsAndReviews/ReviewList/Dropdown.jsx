import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.div`



  height: 34px;
  width: 400px;
  font-family: "Open Sans", sans-serif;
  color: #9eb7c0;
  border-radius: 25px;
  margin-left: 659px;
`;

const Dropdown = (props) => {
  return (
    <StyledDropdown>
      <select name="reviews-sort" onChange={(e) => props.sortHandler(e)} style={{height: '33px', width: '100px', textAlign: 'center', borderRadius: '25px', backgroundColor: '#9EB7C1', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.4)'}}>
        <option value="newest">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="relevant">Newest</option>
      </select>
    </StyledDropdown>
  );
};

export default Dropdown;
