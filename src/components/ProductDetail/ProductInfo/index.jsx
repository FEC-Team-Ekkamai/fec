import React from 'react';


var  ProductInfo = (props) => {
  return (
      <div className="productInfoContainer">
        <div className="description">
          <p className="slogan">
            <b>{props.currentProduct.slogan}</b>
          </p>
          <p className="descriptionText">
            {props.currentProduct.description}
          </p>
        </div>
        <div className="madeOfContainer">
          <ul className="madeOf">
            <li className="madeOfEntry"><span>&#10003;</span> GMO and Pesticide-free</li>
            <li className="madeOfEntry"><span>&#10003;</span> What am I doing</li>
            <li className="madeOfEntry"><span>&#10003;</span> This is made up</li>
            <li className="madeOfEntry"><span>&#10003;</span> It doesnt matter</li>
          </ul>
        </div>
      </div>
  )
}

export default ProductInfo;