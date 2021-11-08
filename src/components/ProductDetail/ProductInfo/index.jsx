import React from 'react';
import Description from './Styles/Description.jsx';
import MadeOf from './Styles/MadeOf.jsx';
import MadeOfList from './Styles/MadeOfList.jsx'
import { ThemeProvider } from 'styled-components'

var  ProductInfo = (props) => {
  return (
      <div>
      <Description>
        <p style={{paddingLeft: '80px', paddingTop: '0', fontSize: '25px'}}>
          <b>{props.currentProduct.slogan}</b>
        </p>
        <p style={{paddingLeft: '80px', paddingRight: '20px'}}>
          {props.currentProduct.description}
        </p>
      </Description>
      <MadeOf>
        <ul style={{listStyleType: 'none'}}>
          <MadeOfList><span>&#10003;</span> GMO and Pesticide-free</MadeOfList>
          <MadeOfList><span>&#10003;</span> Made with 100% Genetic Modification</MadeOfList>
          <MadeOfList><span>&#10003;</span> This is made up</MadeOfList>
          <MadeOfList><span>&#10003;</span> It doesnt matter</MadeOfList>
        </ul>
      </MadeOf>
      </div>
  )
}

export default ProductInfo;