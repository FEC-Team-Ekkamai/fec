import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import ReviewBody from "./RatingsAndReviews/ReviewBody.jsx";
import ProductDetail from "./ProductDetail/Main.jsx";
import ReviewList from "./RatingsAndReviews/ReviewList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      firstProductShown: {}
    };
    this.getProducts = this.getProducts.bind(this);
    this.getFirstProduct = this.getFirstProduct.bind(this);
  }

  getFirstProduct () {
    var numberOfProducts = this.state.products.length;
    var randomProduct = Math.floor(Math.random() * numberOfProducts);
    this.setState({firstProductShown: this.state.products[randomProduct]})
    console.log('this is 1: ', this.state.firstProductShown)
  }

  getProducts () {
    axios.get('http://127.0.0.1:3000/api/products')
      .then((response) => {
        this.setState({products: response.data});
        this.getFirstProduct();
        console.log('this is client side: ', this.state.products);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount () {
    this.getProducts();
  }

  render() {
    const hasFirstProduct = Object.keys(this.state.firstProductShown);
    return (
      <div>
        This is the FEC app
        <ProductDetail />
        <div>
          {hasFirstProduct.length !== 0
            ? <ReviewList firstProduct = {this.state.firstProductShown.id}/>
            : null
          }
        </div>


      </div>
    );
  }
}

export default App;