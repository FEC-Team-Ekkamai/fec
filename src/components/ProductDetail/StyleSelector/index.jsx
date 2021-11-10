import React from 'react';
import IconEntry from './IconEntry.jsx'

var StyleSelector = (props) => {
  //console.log(props);
  var price = props.styles.results[props.currentStyle].original_price
  var salePrice = props.styles.results[props.currentStyle].sale_price

  return (
    <div style={{position: 'relative', height: '398px', width: '400px'}}>
      <div className="rating" style={{paddingLeft: '15px', paddingBottom: '5px'}}>This is where ratings will go</div>
      <div className="category" style={{paddingLeft: '15px', paddingBottom: '5px'}}>{props.currentProduct.category}</div>
      <div className="name" style={{paddingLeft: '15px', paddingBottom: '5px', fontSize: '25px'}}>{props.currentProduct.name}</div>
      {!salePrice ? <div className="price" style={{paddingLeft: '15px', paddingBottom: '5px', color: 'gray'}}>${price}</div> :
      <div className="price" style={{paddingLeft: '15px', paddingBottom: '5px', color: 'gray'}}>${<strike>{price}</strike>} {<b>On Sale!</b>} {<b style={{color: 'red'}}>${salePrice}</b>}</div>}
      <div className="style" style={{paddingLeft: '15px', paddingBottom: '5px'}}><b>STYLE ></b> {props.styles.results[props.currentStyle].name}</div>
      <div className="thumbnail" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 25%)', paddingTop: '10px'}}>
        {props.styles.results.map((style, i) => {
          return (
            <IconEntry style={style} key={i} index={i} getSelectedStyle={props.getSelectedStyle} currentStyle={props.currentStyle}/>
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;