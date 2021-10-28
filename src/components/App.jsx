import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import ReviewList from "./RatingsandReviews/ReviewList.jsx";
import ReviewBody from "./RatingsandReviews/ReviewBody.jsx";
=======
import ReviewList from "./RatingsAndReviews/ReviewList.jsx";
import ReviewBody from "./RatingsAndReviews/ReviewBody.jsx";
>>>>>>> 27f1e61232784e05773ae061c29354fac516122e
import ProductDetail from "./ProductDetail/Main.jsx";
import axios from 'axios'

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
    return (
      <div>
        This is the FEC app
        <ProductDetail />
        <ReviewList />
      </div>
    );
  }
}

export default App;