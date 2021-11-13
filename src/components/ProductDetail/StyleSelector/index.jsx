import React from 'react';
import IconEntry from './IconEntry.jsx'

var StyleSelector = (props) => {
  //console.log(props);
  var price = props.styles.results[props.currentStyle].original_price
  var salePrice = props.styles.results[props.currentStyle].sale_price

  return (
    <div className="styleContainer">
      <div className="rating">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star unchecked"></span>
      </div>
      <div className="category">{props.currentProduct.category}</div>
      <div className="name">{props.currentProduct.name}</div>

      {!salePrice ? <div className="price">${price}</div> :
      <div className="price">${<strike>{price}</strike>} {<b>On Sale!</b>} {<b style={{color: 'red'}}>${salePrice}</b>}</div>}

      <div className="style"><b>STYLE ></b> {props.styles.results[props.currentStyle].name}</div>
      <div className="thumbnailPhotos">
        {props.styles.results.map((style, i) => {
          return (
            <IconEntry
            key={i}
            index={i}
            style={style}
            currentStyle={props.currentStyle}
            getSelectedStyle={props.getSelectedStyle} />
          )
        })}
      </div>
    </div>
  )
}

export default StyleSelector;