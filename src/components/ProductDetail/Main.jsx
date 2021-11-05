import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery/index.jsx'
import ProductInfo from './ProductInfo/index.jsx'
import AddToCart from './AddToCart/index.jsx'
import StyleSelector from './StyleSelector/index.jsx'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: ''
    }
  }

  render() {
    console.log('this is what im showing you: ', this.props.styles.results)
    return (
      <div>
        <h3 style={{textAlign: 'center'}}>SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u></h3>
        <div style={{display: 'flex', width: '1001',margin: 'auto'}}>
          <div style={{border: '1px solid black', height: '600px', width: '600px'}}>
            <ImageGallery productsPackage={this.props} />
          </div>
          <div>
            <div style={{border: '1px solid black', height: '240px', width: '400px'}}>
              <StyleSelector />
            </div>
            <div style={{border: '1px solid black', height: '360px', width: '400px'}}>
              <AddToCart currentProduct={this.props.currentProduct} styles={this.props.styles} />
            </div>
          </div>
        </div>
        <ProductInfo currentProduct={this.props.currentProduct} />
      </div>
    )
  }
}

export default ProductDetail;