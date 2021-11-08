import React from 'react';
import { Dropdown, Option } from 'react-dropdown';

var AddToCart = (props) => {
  var keys = Object.keys(props.styles.results[props.currentStyle].skus)

  var quant = () => {
    var result = [];
    if(!props.quantity) {
      result.push('OUT OF STOCK')
      return result;
    }
    if (props.quantity > 15) {
      for (var i = 0; i < 15; i++) {
        console.log[i]
        result.push(i + 1);
      }
      return result;
    } else {
      for (var i = 0; i < props.quantity; i++) {
        result.push(i + 1);
      }
      return result;
    }
  }

  return (
    <>
      <select className="size" onChange={props.availableQuantity}>
        <option>SELECT SIZE</option>
          {keys.map((quantSize, i) => {
            var skuObj = props.styles.results[props.currentStyle].skus[quantSize]
            return <option value={skuObj.quantity} key={i}>{skuObj.size}</option>
          })}
      </select>
      <select className="quantity">
          {quant().map((item, i) => {
            return <option key={i}>{item}</option>
          })}
      </select>
      <div>
      <button>Add To Cart</button>
      </div>
    </>
  )
}

export default AddToCart;