import React from 'react';
import FeatureEntry from './FeatureEntry.jsx'


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
            {props.features.map((feature, i) => {
              return (
                <FeatureEntry
                key={i}
                feature={feature} />
              )
            })}
          </ul>
        </div>
      </div>
  )
}

export default ProductInfo;