import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from './ImageGallery/index.jsx'
import ProductInfo from './ProductInfo/index.jsx'
import AddToCart from './AddToCart/index.jsx'
import StyleSelector from './StyleSelector/index.jsx'
import EnlargePhoto from './ImageGallery/EnlargePhoto.jsx'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: 0,
      selectedPhoto: 0,
      availableQuantity: 0,
      carouselMin: 0,
      carouselMax: 6,
      view: 'main'
    }
    this.getAvailableQuantity = this.getAvailableQuantity.bind(this);
    this.getSelectedStyle = this.getSelectedStyle.bind(this);
    this.getNextPhoto = this.getNextPhoto.bind(this);
    this.getSelectedPhoto = this.getSelectedPhoto.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeMaxMin = this.changeMaxMin.bind(this);
    this.clickAddToCart = this.clickAddToCart.bind(this);
  }

  getAvailableQuantity () {
    this.setState({availableQuantity: Number(event.target.value)});
  }

  getSelectedStyle (index) {
    this.setState({selectedStyle: index});
  }

  getSelectedPhoto (index) {
    this.setState({selectedPhoto: index})
  }

  getNextPhoto (num) {
    var lastPhoto = this.props.styles.results[this.state.selectedStyle].photos.length - 1
    if (num > 0) {
      if (this.state.selectedPhoto === lastPhoto) {
        this.setState({selectedPhoto: 0})
      } else {
        this.setState({selectedPhoto: this.state.selectedPhoto + 1})
      }
    } else {
      if (this.state.selectedPhoto === 0) {
        this.setState({selectedPhoto: lastPhoto})
      } else {
        this.setState({selectedPhoto: this.state.selectedPhoto - 1})
      }
    }
  }

  changeView (num) {
    if(num > 0) {
      this.setState({view: 'photo'})
    } else {
      this.setState({view: 'main'})
    }
  }

  changeMaxMin (num) {
    var lastPhoto = this.props.styles.results[this.state.selectedStyle].photos.length - 1
    if (num > 0) {
      if (this.state.carouselMax !== lastPhoto) {
        this.setState({carouselMin: this.state.carouselMin + 1, carouselMax: this.state.carouselMax + 1})
      }
    } else {
      if(this.state.carouselMin > 0) {
        this.setState({carouselMin: this.state.carouselMin - 1, carouselMax: this.state.carouselMax - 1})
      }
    }
  }

  clickAddToCart () {
    alert("You have added to your cart!")
    this.setState({availableQuantity: 0});
  }

  renderView () {
    if (this.state.view === 'main') {
      return <div className="overviewView">
        <ImageGallery
        styles={this.props.styles}
        min={this.state.carouselMin}
        max={this.state.carouselMax}
        currentStyle={this.state.selectedStyle}
        currentPhoto={this.state.selectedPhoto}
        changeView={this.changeView}
        getNextPhoto={this.getNextPhoto}
        changeMaxMin={this.changeMaxMin}
        getSelectedPhoto={this.getSelectedPhoto} />
      <div>
        <div>
          <StyleSelector
          styles={this.props.styles}
          currentStyle={this.state.selectedStyle}
          currentProduct={this.props.currentProduct}
          getSelectedStyle={this.getSelectedStyle} />
        </div>
        <div className="addToCart">
          <AddToCart
          styles={this.props.styles}
          currentStyle={this.state.selectedStyle}
          quantity={this.state.availableQuantity}
          currentProduct={this.props.currentProduct}
          clickAddToCart={this.clickAddToCart}
          availableQuantity={this.getAvailableQuantity} />
        </div>
      </div>
    </div>
    } else {
      return <div className="enlargeView">
              <EnlargePhoto
              styles={this.props.styles}
              currentStyle={this.state.selectedStyle}
              currentPhoto={this.state.selectedPhoto}
              changeView={this.changeView} />
            </div>
    }
  }

  render() {
    return (
      <div className="mainOverview">
        <h3 className="saleHeader">SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u></h3>
        {this.renderView()}
        <div className="productInfo">
        <ProductInfo
        features={this.props.features}
        currentProduct={this.props.currentProduct} />
        </div>
      </div>
    )
  }
}

export default ProductDetail;