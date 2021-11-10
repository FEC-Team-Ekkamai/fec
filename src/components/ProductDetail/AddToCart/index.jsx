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
    <div style={{display: 'flex'}}>
      <div style={{padding: '10px'}}>
        <select className="size" style={{height: '50px', width: '150px'}} onChange={props.availableQuantity}>
          <option>SELECT SIZE</option>
            {keys.map((quantSize, i) => {
              var skuObj = props.styles.results[props.currentStyle].skus[quantSize]
              return <option value={skuObj.quantity} key={i}>{skuObj.size}</option>
            })}
        </select>
      </div>

      <div style={{padding: '10px'}}>
      <select className="quantity" style={{height: '50px', width: '150px'}}>
          {quant().map((item, i) => {
            return <option key={i}>{item}</option>
          })}
      </select>
      </div>
    </div>

    <div style={{padding: '10px'}}>
      <button style={{height: '50px', width: '150px'}}>Add To Cart</button>
    </div>
  </>
  )
}

export default AddToCart;