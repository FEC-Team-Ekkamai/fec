import React from 'react';
import IconEntry from './IconEntry.jsx'

var StyleSelector = (props) => {
  return (
    <>
    <div className="rating">This is where ratings will go</div>
    <div className="category">{props.currentProduct.category}</div>
    <div className="name">{props.currentProduct.name}</div>
    <div className="price">${props.styles.results[props.currentStyle].original_price}</div>
    <div><b>STYLE ></b> {props.styles.results[props.currentStyle].name}</div>
    {props.styles.results.map((style, i) => {
      return (
        <IconEntry style={style} key={i} index={i} getSelectedStyle={props.getSelectedStyle}/>
      )
    })}
    </>
  )
}

export default StyleSelector;