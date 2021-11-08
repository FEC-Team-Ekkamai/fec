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
      selectedStyle: 0,
      selectedPhoto: 0,
      availableQuantity: 0,
    }
    this.getAvailableQuantity = this.getAvailableQuantity.bind(this);
    this.getSelectedStyle = this.getSelectedStyle.bind(this);
    this.getNextPhoto = this.getNextPhoto.bind(this);
  }

  getAvailableQuantity () {
    this.setState({availableQuantity: Number(event.target.value)});
  }

  getSelectedStyle (index) {
    this.setState({selectedStyle: index, selectedPhoto: 0});
  }

  getNextPhoto (num) {
    if (num > 0) {
      if (this.state.selectedPhoto === 5) {
        this.setState({selectedPhoto: 0})
      } else {
        this.setState({selectedPhoto: this.state.selectedPhoto + 1})
      }
    } else {
      if (this.state.selectedPhoto === 0) {
        this.setState({selectedPhoto: this.props.styles.results[this.state.selectedStyle].photos.length - 1})
      } else {
        this.setState({selectedPhoto: this.state.selectedPhoto - 1})
      }
    }
  }

  render() {
    return (
      <div className='overview'>
        <h3 style={{textAlign: 'center'}}>SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u></h3>
        <div style={{display: 'flex', width: '1001',margin: 'auto', paddingBottom: '15px'}}>
          <div style={{border: '1px solid black', height: '600px', width: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ImageGallery currentStyle={this.state.selectedStyle} currentPhoto={this.state.selectedPhoto} styles={this.props.styles} getNextPhoto={this.getNextPhoto} />
          </div>
          <div>
            <div style={{border: '1px solid black', height: '398px', width: '400px'}}>
              <StyleSelector currentProduct={this.props.currentProduct} styles={this.props.styles} currentStyle={this.state.selectedStyle} getSelectedStyle={this.getSelectedStyle}/>
            </div>
            <div style={{border: '1px solid black', height: '200px', width: '400px'}}>
              <AddToCart quantity={this.state.availableQuantity} availableQuantity={this.getAvailableQuantity} currentStyle={this.state.selectedStyle} currentProduct={this.props.currentProduct} styles={this.props.styles} />
            </div>
          </div>
        </div>
        <div style={{paddingBottom: '15px'}}>
        <ProductInfo currentProduct={this.props.currentProduct} />
        </div>
      </div>
    )
  }
}

export default ProductDetail;