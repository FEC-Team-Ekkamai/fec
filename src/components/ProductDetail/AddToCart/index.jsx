import React from 'react';
import { Dropdown, Option } from 'react-dropdown';
import facebook from './images/facebook.png'
import pinterest from './images/pinterest.png'
import twitter from './images/twitter.png'


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
    <div className="dropdowns">
      <div className="dropdownContainer">
        <select className="dropdown" onChange={props.availableQuantity}>
          <option>SELECT SIZE</option>
            {keys.map((quantSize, i) => {
              var skuObj = props.styles.results[props.currentStyle].skus[quantSize]
              return <option value={skuObj.quantity} key={i}>{skuObj.size}</option>
            })}
        </select>
      </div>
      <div className="dropdownContainer">
      <select className="dropdown">
          {quant().map((item, i) => {
            return <option key={i}>{item}</option>
          })}
      </select>
      </div>
    </div>
    <div className="dropdownContainer">
      <button className="addToCartButton">Add To Cart</button>
    </div>

      <div className="test "style={{display: "grid", gridTemplateColumns: "repeat(3, 33%)", height: "40px", position: "relative", paddingTop: "10px"}}>
        <div style={{position: "relative"}}>
          <img src={facebook} style={{position: "absolute", height: "30px", width: "30px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", borderRadius: "3px"}}/>
        </div>
        <div style={{position: "relative"}}>
          <img src={pinterest} style={{position: "absolute", height: "30px", width: "30px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", borderRadius: "3px"}}/>
          </div>
        <div style={{position: "relative"}}>
          <img src={twitter} style={{position: "absolute", height: "30px", width: "30px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", borderRadius: "3px"}}/>
          </div>
      </div>

    </>
  )
}

export default AddToCart;